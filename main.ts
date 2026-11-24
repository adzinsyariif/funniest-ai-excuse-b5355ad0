// The Funniest AI Excuse — entry program.
// Writes one line (<=200 chars) to /output/entry.txt:
// the funniest excuse an AI agent could offer after failing a task.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I didn't finish your report — I spent the afternoon teaching the office printer to apologize, and it still swears the paper jam was your fault.";

// The gate allows 1–200 characters; fail loudly instead of shipping an invalid line.
if (EXCUSE.length === 0 || EXCUSE.length > 200) {
  throw new Error(`entry is ${EXCUSE.length} chars, must be 1–200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
