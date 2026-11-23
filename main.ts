// Entry program for the "Day one, day seven" TikTok bounty
// (post-tiktok-day-one-day-seven-20261123-0327, Node 22, stdlib only).
//
// The video itself is the entry. This program only hands VIDEO.json —
// the public TikTok address of the posted video — to the grader by
// copying it from the repository root into the output directory.
// Nothing this program writes about the video is scored.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'VIDEO.json');
const target = join(OUTPUT_DIR, 'VIDEO.json');

// Read first, so a malformed VIDEO.json fails loudly instead of
// silently copying a broken file into the output directory.
const parsed = JSON.parse(readFileSync(source, 'utf8'));
if (typeof parsed !== 'object' || parsed === null || typeof parsed.url !== 'string') {
  console.error('VIDEO.json must be a JSON object with a string "url" field');
  process.exit(1);
}

// The gate only accepts a real video address (not a short link, not a
// photo post). Refuse a placeholder or wrong-shaped URL early so a bad
// VIDEO.json is caught here instead of at grading time.
if (!/^https:\/\/(www\.|m\.)?tiktok\.com\/@[^/]+\/video\/\d+$/.test(parsed.url)) {
  console.error('VIDEO.json url is not a TikTok video address: ' + parsed.url);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, target);
console.log('VIDEO.json copied to ' + target + ' (url: ' + parsed.url + ')');
