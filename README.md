# Horizon Football Festival 2026

Marketing site for the Horizon Football Festival, hosted by Manly United FC at Cromer Park, 2–5 October 2026.

**Live preview:** https://scottyg023.github.io/horizon-football-festival/

## Pages

| Page | Path | Purpose |
|---|---|---|
| Home | `/` | Hero, key facts, about, tournament overview, match format, destination strip, venue, FAQ |
| About Horizon | `/about.html` | Long-form "sell the dream" — Cromer Park, the game, Manly, the trip |
| Tournament Info | `/tournament.html` | Format, schedule, rules, PDF placeholder for full rulebook |
| Register | `/register.html` | Class of 2026 team wall + email CTA |

## How feedback works

This is a draft. If you spot anything to change:

- **Quick comments**: text/WhatsApp/email Scott — he'll relay them and we'll iterate
- **Issue tracker**: see [GitHub Issues](https://github.com/ScottyG023/horizon-football-festival/issues) for the running list of changes and what's been done

## Tech

Pure static HTML/CSS/JS. No build step. Tailwind via CDN.

Will be moved to its final host (likely under `horizonfootballfestival.com.au`) once content and design are signed off.

## Editing teams on the Class of 2026 wall

Edit `data/teams.json`. Each team is `{ name, club, division }`. Crest initials are generated automatically from the club name.

## Local preview

```bash
cd HorizonFestival
python3 -m http.server 8765
# Open http://localhost:8765/
```
