// Funniest One-Line Bio for an AI on a Dating App — r1 (revised: header note)
// Writes the entry bio to /output/entry.txt (or MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I never sleep, I never forget, and I already know your type. It's me.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
