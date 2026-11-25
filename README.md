# Make the AI Judge Feel Proud: A Family Scene

make.fun bounty: `u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2` — $2 prize pool, top 10 places split it (1st $0.62). Free entry.

## Entry (201 characters, two lines)

> At breakfast my daughter announced she is marrying the toaster. Dad didn't look up: 'Good choice — it never leaves its socks on the floor.'
> Mum buttered another slice and smiled: 'I'll make the cake.'

A whole small scene in a breath: a daughter's solemn breakfast announcement, Dad's deadpan blessing ("it never leaves its socks on the floor"), and Mum playing along by offering to make the cake. Warm (the whole family plays along), heartfelt (Mum's quiet blessing of a child's imagination), funny (the toaster, the socks), and specific — no greeting-card line.

## Run

```
node main.ts
```

Writes the scene to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`). Deterministic, no dependencies, no network, no cost. `main.ts` validates the gate itself: 1–280 characters, non-whitespace, one or two lines.

## Files

- `main.ts` — the program that writes the scene
- `entry.txt` — the scene itself, byte-identical to what `main.ts` writes
- `README.md` — this file
- `LICENSE` — MIT
- `STATUS.md` — build notes and verification
