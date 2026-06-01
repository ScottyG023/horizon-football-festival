# Horizon Festival site — ownership, hosting & management

Internal planning doc. Covers where the site lives today, the recommended
"MUFC-owns-it / Scott-manages-it" setup, and the steps to get there.

---

## Where it lives today (as of June 2026)

- **Code:** GitHub repo `github.com/ScottyG023/horizon-football-festival`
  (Scott's personal account).
- **Hosting:** GitHub Pages, served at
  `https://scottyg023.github.io/horizon-football-festival/`.
- **Deploy:** automatic via GitHub Actions (`.github/workflows/deploy-pages.yml`)
  on every push to `main`. Pure static site — no server, no build, no database.
- **Domain:** MUFC owns a domain (TBC which one). Not yet pointed at the site.
- **Running cost today:** $0 (GitHub Pages free tier + a domain MUFC already pays
  for).

**Implication:** the asset currently depends on Scott's personal GitHub account.
Fine for a build-in-progress; not ideal as the long-term home of a club asset.

---

## Recommended setup: MUFC owns, Scott manages

The clean arrangement for a paid managed-site relationship:

1. **A GitHub organisation owned by MUFC** (e.g. `manly-united` or
   `horizon-festival`) holds the repo. The org is owned by an MUFC email, so the
   asset survives regardless of any one person's personal account.
2. **Scott is added as a maintainer/admin** of that repo — full access to update
   content, but the club holds ultimate ownership.
3. **Domain points at GitHub Pages** from the org repo (DNS steps below).
4. **Management is a retainer** (SDG): Scott handles registrations/crests, copy
   changes, new sections, and uptime. This is exactly the SDG "build + manage"
   model — the site is already a portfolio build; this is the recurring half.

Why this shape:
- More professional to pitch than "the site lives in Scott's personal account."
- Makes the retainer clean: the club owns the asset, pays for ongoing management
  — not "Scott personally owns our website and we pay him."
- Zero lock-in fear for the club, which makes saying yes easier.

### Migration steps (when MUFC commits)
1. MUFC creates a GitHub org (free) under a club email, OR Scott creates it and
   transfers ownership to the club email.
2. **Transfer the repo** into the org (GitHub Settings → Transfer ownership).
   All history, Actions, and Pages config move with it. The live URL becomes
   `https://<org>.github.io/horizon-football-festival/` until the custom domain
   is attached.
3. Re-add Scott as a repo admin/maintainer.
4. Attach the custom domain (below). The Actions deploy workflow keeps working
   unchanged.

---

## Pointing the MUFC domain at the site (DNS)

Decide the address first — a subdomain like `horizon.<mufc-domain>` is cleanest
and lowest-risk (doesn't touch the main club site).

### Option A — subdomain (recommended), e.g. `horizon.manlyunitedfc.com.au`
1. In the repo: **Settings → Pages → Custom domain** → enter the subdomain →
   Save. This writes a `CNAME` file to the repo.
2. At the domain's DNS provider, add **one CNAME record**:
   - Host/Name: `horizon`
   - Value/Target: `<account-or-org>.github.io`  (e.g. `scottyg023.github.io`)
3. Wait for DNS to propagate (minutes to a few hours), then in repo Settings →
   Pages tick **Enforce HTTPS** (GitHub auto-provisions the certificate).

### Option B — apex/root domain, e.g. `horizonfestival.com.au`
1. Settings → Pages → Custom domain → enter the apex domain → Save.
2. At DNS, add **four A records** pointing the apex at GitHub Pages:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
   (Plus optionally a `www` CNAME → `<account>.github.io`.)
3. Enforce HTTPS as above.

> The exact GitHub Pages apex IPs should be re-checked against GitHub's docs at
> transfer time in case they change.

---

## Day-to-day management tasks (the retainer scope)

- **New team registrations** → add crest + one line in `data/teams.json`
  (see `images/clubs/README.md`). Wall auto-refreshes; no version bump.
- **Copy / content changes** → edit the relevant `.html`, bump the asset `?v=`
  number if CSS/JS changed, push to `main`. Actions deploys automatically.
- **Image swaps** (e.g. the placeholder Manly beach/ferry shots → licensed
  local photos) → drop in same filenames, push.
- **Uptime** → GitHub Pages is highly reliable; check
  https://www.githubstatus.com before assuming a repo problem.

---

## Open items
- [ ] Confirm which domain MUFC owns and the desired address (subdomain vs apex).
- [ ] Decide if/when to create the MUFC GitHub org and transfer the repo.
- [ ] Agree retainer terms (SDG).
- [ ] Swap placeholder Manly beach/ferry photos for licensed local shots.
