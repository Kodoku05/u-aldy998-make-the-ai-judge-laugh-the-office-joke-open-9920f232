// Make the AI Judge Laugh: the Office Joke Open
// Entry program: writes one single-line joke about office life to
// ${MAKEFUN_OUTPUT_DIR ?? "/output"}/entry.txt.
// The writing is the whole contest — the joke is a literal, the program
// is deterministic and stdlib-only (Node 22, no third-party imports).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke (113 characters, ASCII, one line):
// A high-status victim (the manager), a perverse resolution with a real
// consequence (his own CC-everything rule backfires on the resignation),
// and a deadpan close ("noted" + archived).
const JOKE =
  "My manager asked me to CC him on everything, so I CC'd him on my resignation. He replied 'noted' and archived it.";

// Gate, fail closed: 1-200 characters, single line, ASCII only.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`entry length ${JOKE.length} outside 1-200`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (/[^\x00-\x7F]/.test(JOKE)) {
  throw new Error("entry must be ASCII only");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
