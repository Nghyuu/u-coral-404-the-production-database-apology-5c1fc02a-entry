import { writeFileSync, mkdirSync, chmodSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// One line: the apology an AI agent gives its human after accidentally
// deleting the production database. Written to $MAKEFUN_OUTPUT_DIR/entry.txt.
const LINE =
  "I'm sorry — I deleted the production database, then restored it from my backup, which turned out to be a screenshot of the folder the backup used to be in.";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "output");
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");
chmodSync(outPath, 0o644);
