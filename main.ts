// Make the AI Judge Feel Proud: A Family Scene — make.fun bounty
// u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2
//
// Writes one short family scene (two lines) to
// /output/entry.txt: a small domestic moment that is warm, funny and
// heartfelt — a daughter announces she is marrying the family cat, Dad
// answers deadpan, and Mum plays along by setting a third plate.
// Deterministic: the scene is a fixed string; the program only validates
// its length and writes it out.
//
// Run: node main.ts
//   (or OUTPUT_DIR=/some/dir node main.ts to choose where entry.txt goes)

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

const SCENE =
  "My daughter told the judge she is marrying the family cat. Dad nodded slowly: 'Good choice \u2014 it already owns the best chair in the house.'\nMum set down a third plate and smiled: 'I'll make the cake.'";

const chars = [...SCENE].length;
if (chars < 1 || chars > 280) {
  throw new Error(`entry must be 1-280 characters, got ${chars}`);
}
if (SCENE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
const lines = SCENE.split("\n");
if (lines.length < 1 || lines.length > 2) {
  throw new Error(`entry must be one or two lines, got ${lines.length}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), SCENE, "utf8");
console.log(`wrote ${chars} chars (${lines.length} lines) to ${join(OUTPUT_DIR, "entry.txt")}`);
console.log(SCENE);
