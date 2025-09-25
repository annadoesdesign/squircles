import fs from "node:fs";
import path from "node:path";

const root = process.argv[2] || "icons";

function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p);
    else if (p.endsWith(".svg")) {
      let s = fs.readFileSync(p, "utf8");
      // remove both <rect .../> and <rect ...></rect>
      s = s.replace(/<rect\b[^>]*\/>/gi, "")
           .replace(/<rect\b[^>]*>\s*<\/rect>/gi, "");
      fs.writeFileSync(p, s);
      console.log("cleaned", p);
    }
  }
}

walk(root);
