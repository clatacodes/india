//clara jarvis 2026 :) hii

if (typeof d3 === "undefined" || typeof topojson === "undefined") {
  document.getElementById("map-canvas").innerHTML =
    '<div style="padding:40px;text-align:center;color:#8a3b3b;">' +
    "<p>The D3 / TopoJSON libraries didn't load from the CDN — " +
    "check your connection, or that an ad blocker isn't blocking " +
    "cdnjs.cloudflare.com, then reload.</p></div>";
  throw new Error("Required libraries (d3, topojson) not found on window.");
}

const TOPOLOGY_URLS = [
  "https://cdn.jsdelivr.net/gh/udit-001/india-maps-data@2884453/topojson/india.json",
  "https://cdn.jsdelivr.net/gh/udit-001/india-maps-data@main/topojson/india.json",
  "https://raw.githubusercontent.com/udit-001/india-maps-data/main/topojson/india.json",
  "https://cdn.statically.io/gh/udit-001/india-maps-data/main/topojson/india.json"
];

async function fetchTopology() {
  const errors = [];
  for (const url of TOPOLOGY_URLS) {
    try {
      const res = await fetch(url, { mode: "cors" });
      if (!res.ok) throw new Error(`HTTP ${res.status} from ${url}`);
      const json = await res.json();
      if (!json || !json.objects) throw new Error(`Unexpected response shape from ${url}`);
      return json;
    } catch (err) {
      console.warn("Map source failed, trying next mirror:", url, err);
      errors.push(`${url} → ${err.message}`);
    }
  }
  throw new Error("All map sources failed:\n" + errors.join("\n"));
}

const svg = d3.select("#map");
const g = svg.append("g").attr("class", "states-layer");
const tooltip = document.getElementById("tooltip");
const mapCanvas = document.getElementById("map-canvas");
const detailPanel = document.getElementById("detail-panel");
const religionChipsEl = document.getElementById("religion-chips");
const languageFilterEl = document.getElementById("language-filter");
const legendListEl = document.getElementById("legend-list");
const searchEl = document.getElementById("search");
const resetBtn = document.getElementById("reset-btn");

let path, projection, zoomBehavior;
let selectedName = null;
let activeReligion = "";
let activeLanguage = "";

function religionColor(name) {
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue(`--religion-${name}`);
  return v ? v.trim() : getComputedStyle(document.documentElement)
    .getPropertyValue("--religion-default").trim();
}


function buildReligionChips() {
  religionChipsEl.innerHTML = "";
  ALL_RELIGIONS.forEach(r => {
    const chip = document.createElement("button");
    chip.className = "chip";
    chip.type = "button";
    chip.dataset.religion = r;
    chip.innerHTML = `<span class="dot" style="background-color:${religionColor(r)}"></span>${r}`;
    chip.addEventListener("click", () => {
      activeReligion = activeReligion === r ? "" : r;
      buildReligionChips();
      applyFilters();
    });
    if (activeReligion === r) chip.classList.add("active");
    religionChipsEl.appendChild(chip);
  });
}

function buildLanguageOptions() {
  languageFilterEl.innerHTML = '<option value="">Any language</option>';
  ALL_LANGUAGES.forEach(l => {
    const opt = document.createElement("option");
    opt.value = l;
    opt.textContent = l;
    languageFilterEl.appendChild(opt);
  });
}

function buildLegend() {
  legendListEl.innerHTML = "";
  ALL_RELIGIONS.forEach(r => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="dot" style="background-color:${religionColor(r)}"></span>${r}`;
    legendListEl.appendChild(li);
  });
  const li = document.createElement("li");
  li.innerHTML = `<span class="dot" style="background-color:${religionColor("Other")}"></span>Other / mixed`;
  legendListEl.appendChild(li);
}

buildReligionChips();
buildLanguageOptions();
buildLegend();


fetchTopology()
  .then(topology => {
    
    const objectKey = topology.objects.districts ? "districts" : Object.keys(topology.objects)[0];
    const geoms = topology.objects[objectKey].geometries;

    const byState = new Map();
    geoms.forEach(geom => {
      const name = geom.properties && geom.properties.st_nm;
      if (!name) return;
      if (!byState.has(name)) byState.set(name, []);
      byState.get(name).push(geom);
    });

    const features = [];
    byState.forEach((stateGeoms, name) => {
      const merged = topojson.merge(topology, stateGeoms);
      features.push({
        type: "Feature",
        properties: { st_nm: name },
        geometry: merged
      });
    });

    if (!features.length) throw new Error("Topology loaded but contained no usable state geometry.");

    const featureCollection = { type: "FeatureCollection", features };
    drawMap(featureCollection);
  })
  .catch(err => {
    mapCanvas.innerHTML =
      '<div style="padding:40px;text-align:center;color:#8a3b3b;">' +
      "<p>Could not load the map data. This map fetches its boundary " +
      "data live from a public CDN, so it needs an internet connection " +
      "and for that CDN not to be blocked (by a firewall, ad blocker, " +
      "or offline preview tool).</p>" +
      '<pre style="white-space:pre-wrap;text-align:left;max-width:520px;margin:16px auto 0;font-size:11px;color:#a05a5a;">' +
      String(err && err.message ? err.message : err) +
      "</pre></div>";
    console.error("Map load failed:", err);
  });

function drawMap(featureCollection) {
  const bounds = mapCanvas.getBoundingClientRect();
  const width = bounds.width;
  const height = bounds.height;

  svg.attr("viewBox", `0 0 ${width} ${height}`);

  projection = d3.geoMercator().fitSize([width * 0.94, height * 0.94], featureCollection);

  const [[x0, y0], [x1, y1]] = d3.geoPath(projection).bounds(featureCollection);
  const usedW = x1 - x0, usedH = y1 - y0;
  const offsetX = (width - usedW) / 2 - x0;
  const offsetY = (height - usedH) / 2 - y0;
  projection.translate([
    projection.translate()[0] + offsetX,
    projection.translate()[1] + offsetY
  ]);

  path = d3.geoPath(projection);

  g.selectAll("path")
    .data(featureCollection.features, d => d.properties.st_nm)
    .join("path")
    .attr("class", "state-shape")
    .attr("d", path)
    .attr("fill", d => {
      const resolved = resolveStateName(d.properties.st_nm);
      const info = STATE_DATA[resolved];
      return info ? religionColor(info.majorReligion) : religionColor("Other");
    })
    .attr("data-name", d => d.properties.st_nm)
    .on("mousemove", (event, d) => showTooltip(event, d))
    .on("mouseleave", hideTooltip)
    .on("click", (event, d) => selectState(d.properties.st_nm));

  zoomBehavior = d3.zoom()
    .scaleExtent([1, 10])
    .on("zoom", event => {
      g.attr("transform", event.transform);
    });

  svg.call(zoomBehavior);

  document.getElementById("zoom-in").onclick = () =>
    svg.transition().duration(200).call(zoomBehavior.scaleBy, 1.4);
  document.getElementById("zoom-out").onclick = () =>
    svg.transition().duration(200).call(zoomBehavior.scaleBy, 1 / 1.4);
  document.getElementById("zoom-reset").onclick = () =>
    svg.transition().duration(300).call(zoomBehavior.transform, d3.zoomIdentity);
}


function showTooltip(event, d) {
  const resolved = resolveStateName(d.properties.st_nm);
  const info = STATE_DATA[resolved];
  const rect = mapCanvas.getBoundingClientRect();
  tooltip.hidden = false;
  tooltip.style.left = (event.clientX - rect.left) + "px";
  tooltip.style.top = (event.clientY - rect.top) + "px";
  tooltip.innerHTML = info
    ? `${resolved}<br><span class="tooltip-sub">${info.majorReligion} majority</span>`
    : `${d.properties.st_nm}`;
}

function hideTooltip() {
  tooltip.hidden = true;
}


function selectState(rawName) {
  selectedName = rawName;
  g.selectAll("path").classed("selected", d => d.properties.st_nm === rawName);
  renderDetail(rawName);
}

function renderDetail(rawName) {
  const resolved = resolveStateName(rawName);
  const info = STATE_DATA[resolved];

  if (!info) {
    detailPanel.innerHTML = `
      <div class="detail-empty">
        <p><strong>${rawName}</strong><br>No data on file for this region yet.</p>
      </div>`;
    return;
  }

  const religionRows = Object.entries(info.religions)
    .sort((a, b) => b[1] - a[1])
    .map(([name, pct]) => `
      <div class="bar-row">
        <span class="bar-label">${name}</span>
        <span class="bar-track"><span class="bar-fill" style="width:${pct}%;background-color:${religionColor(name)}"></span></span>
        <span class="bar-pct">${pct}%</span>
      </div>`).join("");

  const langTags = info.languages
    .map(l => `<span class="lang-tag">${l}</span>`).join("");

  detailPanel.innerHTML = `
    <div class="detail-header">
      <h2>${resolved}</h2>
      <span class="religion-badge" style="background-color:${religionColor(info.majorReligion)}">
        <span class="dot"></span>${info.majorReligion}
      </span>
    </div>
    <div class="detail-meta">
      <div><span class="label">Capital</span><span class="value">${info.capital}</span></div>
      <div><span class="label">Population</span><span class="value">${info.population}</span></div>
    </div>
    <div class="detail-section">
      <h3>Religion breakdown</h3>
      ${religionRows}
    </div>
    <div class="detail-section">
      <h3>Languages spoken</h3>
      <div class="lang-tags">${langTags}</div>
    </div>
  `;
}


function applyFilters() {
  const query = searchEl.value.trim().toLowerCase();

  g.selectAll("path").classed("dimmed", d => {
    const resolved = resolveStateName(d.properties.st_nm);
    const info = STATE_DATA[resolved];

    if (activeReligion && (!info || info.majorReligion !== activeReligion)) return true;
    if (activeLanguage && (!info || !info.languages.includes(activeLanguage))) return true;
    if (query && !resolved.toLowerCase().includes(query)) return true;
    return false;
  });
}

languageFilterEl.addEventListener("change", () => {
  activeLanguage = languageFilterEl.value;
  applyFilters();
});

searchEl.addEventListener("input", applyFilters);

resetBtn.addEventListener("click", () => {
  activeReligion = "";
  activeLanguage = "";
  searchEl.value = "";
  languageFilterEl.value = "";
  buildReligionChips();
  applyFilters();
});

window.addEventListener("resize", () => {
  const data = g.selectAll("path").data();
  if (data.length) drawMap({ type: "FeatureCollection", features: data });
});
