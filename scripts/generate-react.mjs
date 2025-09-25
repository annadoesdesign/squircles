import fs from "node:fs/promises";
import path from "node:path";
import fg from "fast-glob";
import { optimize } from "svgo";
import { pascalCase } from "change-case";

const ROOT   = process.cwd();
const ICONS  = path.join(ROOT, "icons");                 // icons/{fill,regular,light}
const OUT    = path.join(ROOT, "packages/react/src");
const OUT_DIR= path.join(OUT, "icons");
const INDEX  = path.join(OUT, "index.ts");

// SVGO keeps paths clean but preserves currentColor
const SVGO = {
  plugins: [
    { name: "preset-default" },
    { name: "removeViewBox", params: false },
    { name: "removeDimensions" },
    { name: "removeAttrs", params: { attrs: "(stroke|fill):(none|#000|#000000)" } }
  ]
};

const weights = ["fill","regular","light"];

const inner = (svg) => {
  const m = svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  return m ? m[1].trim() : svg.trim();
};

/** Per-weight attribute enforcement */
function forFill(s) {
  // strip any existing fill/stroke attrs then enforce a solid fill
  return s
    .replace(/\s(fill|stroke|stroke-width|stroke-linecap|stroke-linejoin)="[^"]*"/g, "")
    .replace(/<([a-z]+)\b/gi, '<$1 fill="currentColor" stroke="none"');
}

function forStroke(s, width) {
  // For stroke icons, we want to be more selective about what becomes stroke vs fill
  // Lines should be strokes, but small details (dots) should remain filled
  return s
    .replace(/\s(fill|stroke|stroke-width|stroke-linecap|stroke-linejoin|fill-rule|clip-rule)="[^"]*"/g, "")
    .replace(/<line\b/gi, `<line fill="none" stroke="currentColor" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"`)
    .replace(/<circle\b([^>]*r="112")/gi, `<circle fill="none" stroke="currentColor" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round" $1`)
    .replace(/<path\b([^>]*d="M128 74\.667v64")/gi, `<path fill="none" stroke="currentColor" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round" $1`)
    .replace(/<path\b/gi, '<path fill="currentColor" stroke="none"');
}

const compTpl = (name, parts) => `
import * as React from "react";
import { IconContext, type IconContextValue } from "../core/context";

const paths = {
  fill: ${JSON.stringify(parts.fill ?? "")},
  regular: ${JSON.stringify(parts.regular ?? "")},
  light: ${JSON.stringify(parts.light ?? "")},
} as const;

export default function ${name}(props: React.SVGProps<SVGSVGElement> & Partial<IconContextValue>) {
  const ctx = React.useContext(IconContext);
  const { size = ctx.size, color = ctx.color, weight = ctx.weight, mirrored = ctx.mirrored, ...rest } = props;
  const g = paths[weight] ?? paths.regular ?? paths.fill ?? paths.light ?? "";
  const transform = mirrored ? "scale(-1,1) translate(-256,0)" : undefined;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      {...rest}
    >
      <g transform={transform} dangerouslySetInnerHTML={{ __html: g }} />
    </svg>
  );
}
`.trim();

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  // group files by base name across weights
  const files = await fg(["fill/*.svg","regular/*.svg","light/*.svg"], { cwd: ICONS });
  const map = new Map(); // baseName -> { fill,regular,light }
  for (const rel of files) {
    const w = rel.split("/")[0];                 // fill|regular|light
    const base = path.basename(rel, ".svg");     // AlertCircle
    const abs = path.join(ICONS, rel);
    if (!map.has(base)) map.set(base, {});
    map.get(base)[w] = abs;
  }

  const exports = [];
  let count = 0;

  for (const [base, group] of map.entries()) {
    const comp = pascalCase(base);
    const parts = {};
    for (const w of weights) {
      if (!group[w]) continue;
      const raw = await fs.readFile(group[w], "utf8");
      const { data } = optimize(raw, SVGO);
      const content = inner(data);
      if (w === "fill") {
        parts[w] = forFill(content);
      } else if (w === "regular") {
        parts[w] = forStroke(content, 16);
      } else if (w === "light") {
        parts[w] = forStroke(content, 12);
      } else {
        parts[w] = content;
      }
    }
    await fs.writeFile(path.join(OUT_DIR, `${comp}.tsx`), compTpl(comp, parts), "utf8");
    exports.push(`export { default as ${comp} } from "./icons/${comp}";`);
    count++;
  }

  // keep existing non-icon exports, then append icon exports
  let head = "export { IconContext } from \"./core/context\";";
  try {
    head = await fs.readFile(INDEX, "utf8");
  } catch {}

  const kept = head.split("\n").filter(l => !l.startsWith("export { default as ")).join("\n").trim();
  await fs.writeFile(INDEX, kept + "\n" + exports.join("\n") + "\n", "utf8");

  console.log(`✅ Generated ${count} components`);
}
main().catch(e => { console.error(e); process.exit(1); });
