#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
function checkLiteManifest(file) {
  const j = JSON.parse(fs.readFileSync(file, 'utf8'));
  const name = j.name?.short ?? '';
  const desc = j.description?.short ?? '';
  const instr = j.instructions?.content ?? '';
  let ok = true;
  if (name.length > 30) { console.error(`[Lite] Name too long (${name.length}) in ${file}`); ok = false; }
  if (desc.length > 1000) { console.error(`[Lite] Description is very long (${desc.length}) in ${file}`); }
  if (instr.length > 8000) { console.error(`[Lite] Instructions exceed 8000 chars (${instr.length}) in ${file}`); ok = false; }
  return ok;
}
let success = true;
const root = path.join(process.cwd(), 'agents');
function walk(dir) {
  for (const e of fs.readdirSync(dir)) {
    const p = path.join(dir, e);
    const s = fs.statSync(p);
    if (s.isDirectory()) walk(p);
    else if (s.isFile() && e === 'manifest.json') {
      success = checkLiteManifest(p) && success;
    }
  }
}
walk(root);
if (!success) { process.exit(1); }
console.log('Lite lint OK');
