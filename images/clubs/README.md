# Club crests — Class of 2026 wall

This folder holds the club crest images shown on the **register.html** team wall
("The Class of 2026"). Clubs supply their crest when they register; drop it here
and add one line to the team data.

## Adding a newly-registered team (the whole process)

1. **Save the crest** in this folder as a PNG, named after the club in lowercase
   with hyphens — e.g. `images/clubs/north-shore-united.png`.
   - PNG with a transparent background looks best in the round badge.
   - Square-ish logos look best. Very wide "wordmark" logos will sit small inside
     the circle (they're scaled to fit, never stretched).
   - Aim for roughly 200×200px or larger.

2. **Add the team** to `data/teams.json`. Append a new object to the END of the
   `teams` array (order on the wall = registration order, left to right):

   ```json
   { "name": "North Shore United", "club": "North Shore United", "division": "U11 Mixed", "crest": "images/clubs/north-shore-united.png" }
   ```

   - `name` — what shows on the tile (usually the club name).
   - `club` — used for the fallback initials if `crest` is missing.
   - `division` — the age group, e.g. `U10 Mixed`, `U12/U13 Girls`.
   - `crest` — path to the image you saved in step 1. **Optional** — if you leave
     it out, the tile shows the club's initials instead, so a team can go up
     before its crest arrives.

3. **Done.** No cache version to bump — the wall always loads the latest
   `teams.json`. The "X of 108 spots filled" counter updates automatically.

## Notes
- Manly United's crest lives at `images/manly-united-logo.png` (not in this
  folder) because it predates this convention — that's fine, the `crest` path
  just points wherever the file is.
- If a tile shows a broken image, the `crest` path in `teams.json` doesn't match
  the actual filename here (check spelling / case / `.png` vs `.jpg`).
