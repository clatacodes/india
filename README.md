
# Indian Subcontinent — Religion & Language Explorer

A plain HTML/CSS/JS site (no frameworks, no build step) showing an
interactive schematic map of the Indian subcontinent. Click a region
to see its majority religion, religion breakdown, and languages.
Filter by religion, language, or search by name.

## Files

- `index.html` — page structure
- `style.css` — flat blue theme (no gradients)
- `data.js` — all region data (religion %, languages, population, capital, map coordinates)
- `script.js` — renders the map, wires up filters and the click-to-view info panel

## Notes on the data

- The map is a **schematic** layout (dots placed at rough relative
  positions), not a geographically accurate projection — this keeps
  the whole thing dependency-free (no map tile service, no external
  GeoJSON library).
- Religion percentages and populations in `data.js` are approximate,
  general-reference figures for demonstration — not official census
  output. Swap in your own dataset in `data.js` if you need accurate
  figures; the rest of the app will pick it up automatically as long
  as you keep the same object shape.
