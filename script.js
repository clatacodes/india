

const SVG_NS = "http://www.w3.org/2000/svg";
const svg = document.getElementById("map");
const religionFilter = document.getElementById("religion-filter");
const languageFilter = document.getElementById("language-filter");
const searchBox = document.getElementById("search");
const resetBtn = document.getElementById("reset-btn");
const infoPanel = document.getElementById("info-panel");
const matchCount = document.getElementById("match-count");
const legendList = document.getElementById("legend-list");

let selectedId = null;


ALL_RELIGIONS.forEach(r => {
  const opt = document.createElement("option");
  opt.value = r;
  opt.textContent = r;
  religionFilter.appendChild(opt);
});

ALL_LANGUAGES.forEach(l => {
  const opt = document.createElement("option");
  opt.value = l;
  opt.textContent = l;
  languageFilter.appendChild(opt);
});


ALL_RELIGIONS.forEach(r => {
  const li = document.createElement("li");
  const swatch = document.createElement("span");
  swatch.className = "swatch";
  swatch.style.backgroundColor = getComputedStyle(document.documentElement)
    .getPropertyValue(`--religion-${r}`);
  li.appendChild(swatch);
  li.appendChild(document.createTextNode(r));
  legendList.appendChild(li);
});


function religionColor(name) {
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue(`--religion-${name}`);
  return v ? v.trim() : getComputedStyle(document.documentElement)
    .getPropertyValue("--religion-Other").trim();
}

function buildMap() {
  REGIONS.forEach(region => {
    const dot = document.createElementNS(SVG_NS, "circle");
    dot.setAttribute("cx", region.x);
    dot.setAttribute("cy", region.y);
    dot.setAttribute("r", 9);
    dot.setAttribute("fill", religionColor(region.majorReligion));
    dot.classList.add("region-dot");
    dot.dataset.id = region.id;
    dot.addEventListener("click", () => selectRegion(region.id));
    svg.appendChild(dot);

    const label = document.createElementNS(SVG_NS, "text");
    label.setAttribute("x", region.x);
    label.setAttribute("y", region.y - 12);
    label.classList.add("region-label");
    label.dataset.id = region.id;
    label.textContent = region.name;
    svg.appendChild(label);
  });
}

buildMap();


function currentFilters() {
  return {
    religion: religionFilter.value,
    language: languageFilter.value,
    search: searchBox.value.trim().toLowerCase()
  };
}

function regionMatches(region, filters) {
  if (filters.religion && region.majorReligion !== filters.religion) return false;
  if (filters.language && !region.languages.includes(filters.language)) return false;
  if (filters.search && !region.name.toLowerCase().includes(filters.search)) return false;
  return true;
}

function applyFilters() {
  const filters = currentFilters();
  let visibleCount = 0;

  REGIONS.forEach(region => {
    const match = regionMatches(region, filters);
    if (match) visibleCount++;

    const dot = svg.querySelector(`circle[data-id="${region.id}"]`);
    const label = svg.querySelector(`text[data-id="${region.id}"]`);

    dot.classList.toggle("dimmed", !match);
    label.classList.toggle("dimmed", !match);
  });

  const anyFilterActive = filters.religion || filters.language || filters.search;
  matchCount.textContent = anyFilterActive
    ? `${visibleCount} of ${REGIONS.length} regions match`
    : `${REGIONS.length} regions total`;
}

religionFilter.addEventListener("change", applyFilters);
languageFilter.addEventListener("change", applyFilters);
searchBox.addEventListener("input", applyFilters);

resetBtn.addEventListener("click", () => {
  religionFilter.value = "";
  languageFilter.value = "";
  searchBox.value = "";
  applyFilters();
});

applyFilters();


function selectRegion(id) {
  selectedId = id;

  svg.querySelectorAll(".region-dot").forEach(d => {
    d.classList.toggle("selected", d.dataset.id === id);
  });

  const region = REGIONS.find(r => r.id === id);
  renderInfoPanel(region);
}

function infoRow(label, value) {
  const row = document.createElement("div");
  row.className = "info-row";
  const strong = document.createElement("strong");
  strong.textContent = label;
  row.appendChild(strong);
  row.appendChild(document.createTextNode(value));
  return row;
}

function renderInfoPanel(region) {
  infoPanel.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = region.name;
  infoPanel.appendChild(title);

  const country = document.createElement("div");
  country.className = "info-country";
  country.textContent = region.country;
  infoPanel.appendChild(country);

  infoPanel.appendChild(infoRow("Capital", region.capital));
  infoPanel.appendChild(infoRow("Population (approx.)", region.population));
  infoPanel.appendChild(infoRow("Majority religion", region.majorReligion));

  // religion breakdown bars
  const relWrap = document.createElement("div");
  relWrap.className = "info-row";
  const relLabel = document.createElement("strong");
  relLabel.textContent = "Religion breakdown";
  relWrap.appendChild(relLabel);

  Object.entries(region.religions).forEach(([name, pct]) => {
    const row = document.createElement("div");
    row.className = "bar-row";

    const nameSpan = document.createElement("span");
    nameSpan.style.width = "78px";
    nameSpan.style.flexShrink = "0";
    nameSpan.textContent = name;

    const track = document.createElement("div");
    track.className = "bar-track";
    const fill = document.createElement("div");
    fill.className = "bar-fill";
    fill.style.width = pct + "%";
    fill.style.backgroundColor = religionColor(name);
    track.appendChild(fill);

    const pctSpan = document.createElement("span");
    pctSpan.style.width = "32px";
    pctSpan.style.flexShrink = "0";
    pctSpan.style.textAlign = "right";
    pctSpan.textContent = pct + "%";

    row.appendChild(nameSpan);
    row.appendChild(track);
    row.appendChild(pctSpan);
    relWrap.appendChild(row);
  });

  infoPanel.appendChild(relWrap);

  // languages
  const langWrap = document.createElement("div");
  langWrap.className = "info-row";
  const langLabel = document.createElement("strong");
  langLabel.textContent = "Languages";
  langWrap.appendChild(langLabel);

  region.languages.forEach(l => {
    const tag = document.createElement("span");
    tag.className = "lang-tag";
    tag.textContent = l;
    langWrap.appendChild(tag);
  });

  infoPanel.appendChild(langWrap);
}
