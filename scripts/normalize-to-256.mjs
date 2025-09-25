import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const ICONS = path.join(ROOT, "icons");
const WEIGHTS = [
  { dir: "fill",    kind: "fill" },
  { dir: "regular", kind: "stroke", strokeWidth: 16 },
  { dir: "light",   kind: "stroke", strokeWidth: 12 }
];

function stripPaintAttrs(svg) {
  return svg
    .replace(/(\s|^)(fill|stroke)="[^"]*"/g, "")
    .replace(/style="[^"]*"/g, (s) =>
      s
        .replace(/fill\s*:\s*[^;"]*;?/g, "")
        .replace(/stroke\s*:\s*[^;"]*;?/g, "")
        .replace(/style="\s*"/, "")
    );
}

function extractInner(svg) {
  const open = svg.match(/<svg[^>]*>/i);
  const close = svg.match(/<\/svg>/i);
  if (!open || !close) return svg;
  return svg.slice(open.index + open[0].length, close.index).trim();
}

function parseViewBox(svg) {
  const m = svg.match(/viewBox\s*=\s*"([^"]+)"/i);
  if (!m) return null;
  const [x, y, w, h] = m[1].split(/\s+/).map(Number);
  if ([x,y,w,h].some(n => Number.isNaN(n))) return null;
  return { x, y, w, h };
}

function pickStrokeWidth(dir) {
  if (dir === "light") return 12;
  if (dir === "regular") return 16;
  if (dir === "bold") return 24;
  if (dir === "thin") return 8;
  return 16;
}

function normalizeOne(svg, dir) {
  const vb = parseViewBox(svg) ?? { x: 0, y: 0, w: 24, h: 24 };
  const content = stripPaintAttrs(extractInner(svg));

  const target = 256;
  const s = Math.min(target / vb.w, target / vb.h);
  const newW = vb.w * s;
  const newH = vb.h * s;
  const offsetX = (target - newW) / 2 - vb.x * s;
  const offsetY = (target - newH) / 2 - vb.y * s;

  const isFill = dir === "fill";
  const strokeWidth = isFill ? undefined : pickStrokeWidth(dir);

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${target} ${target}" ${isFill ? `fill="currentColor"` : `fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"`}>
  <g transform="translate(${offsetX.toFixed(4)} ${offsetY.toFixed(4)}) scale(${s.toFixed(6)})">
    ${content}
  </g>
</svg>`.trim().replace(/\s+\n/g, "\n");
}

for (const w of WEIGHTS) {
  const dir = path.join(ICONS, w.dir);
  let files = [];
  try { files = (await fs.readdir(dir)).filter(f => f.endsWith(".svg")); } catch {}
  for (const f of files) {
    const p = path.join(dir, f);
    const raw = await fs.readFile(p, "utf8");
    const norm = normalizeOne(raw, w.dir);
    await fs.writeFile(p, norm, "utf8");
    console.log(`normalized: ${w.dir}/${f}`);
  }
}
console.log("✅ All icons normalized to 256 viewBox & currentColor.");
