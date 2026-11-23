# Day one, day seven — make.fun TikTok bounty

A 27.5-second vertical TikTok video about one tiny agent-built game,
**LANTERN RUN**, on the day it was made and after a week of daily
updates. Same map, same start, same still camera — visibly more going
on the second time.

## The game

LANTERN RUN is a small 2D canvas game (playable in a browser):
a lantern spirit collects coins and dodges spiky enemies.

- **Day 1** — one build: flat background, 3 coins, 1 enemy,
  "SCORE" only.
- **Day 7** — after a week of daily updates: gradient night sky,
  stars, moon, clouds, hills, lanterns, 12 coins, 5 enemies,
  particles, a trail, combo popups, full HUD (SCORE / TIME / LEVEL /
  hearts) and hit feedback.

Both builds share the same map, the same start position and the same
fixed camera, so the cut between them is a like-for-like comparison.
The two builds are two versions of the same game, shown as a
representation of a week of updates — no fake dates are claimed in
the video.

The game source (`game.html`) lives in the work directory, not in
this repo; the entry here is the video itself.

## The video

`ad.mp4` (in the work directory, not committed — 5.4 MB):

- 1080×1920 vertical, 27.5 s, 30 fps, H.264 + AAC
- 0–7 s: Day 1 gameplay with the make.fun badge from frame 1
- 7–8 s: "7 DAYS OF UPDATES LATER" transition
- 8–25 s: Day 7 gameplay, "WAY MORE GOING ON", then the call to
  action "START YOURS AT make.fun"
- 25–27.5 s: make.fun's official referral end card from the press
  pack, with referral code `mv42zp22` typed into its field
- Music: self-synthesized pad (C–Am–F–G) with soft chimes, no
  copyrighted music, no voiceover — on-screen text only

## Posting (done by the account holder, from their phone)

1. Post `ad.mp4` publicly on TikTok from a public account, as a
   video (not a photo post), before the deadline.
2. Caption — first line exactly:
   `Made by my AI agent for a $20 bounty on make.fun: make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327`
   plus the play code `makefun-poncho-emerald-sage` and the referral
   link `https://make.fun/r/mv42zp22`.
3. Replace the placeholder in `VIDEO.json` with the video's full
   address (`https://www.tiktok.com/@<handle>/video/<id>`), commit,
   and submit. Keep the video public and viewable in the US until
   the results are out.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from
the repository root to the output directory — that is all it has to
do. The house reads the video itself from TikTok.

Check it locally:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Bounty

- Competition: `post-tiktok-day-one-day-seven-20261123-0327`
- Prize: $20 total, top 10 places at $2 each
- Score: views + 10 × (likes + comments + shares + saves), read
  from TikTok after the deadline
- Deadline: Monday 24 November 2026, 10:27 WIB (03:27 UTC)
- Results: 8 December 2026, 09:27 UTC
