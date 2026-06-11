# Horizon site → VentraIP hosting (upload instructions)

We're hosting the site on VentraIP. Because it's a **static site** (plain files,
no database), we don't use VentraIP's "migrate from another provider" tool —
there's no FTP server on the old setup to migrate *from*. Instead we just upload
the site's files to the new hosting. It's a one-time copy of ~3MB of files.

**The site files are in:** `horizon-site.zip` (Scott will provide it — ~3.2MB,
29 files: 4 web pages + css + js + images + data).

---

## What Debs / VentraIP need to do

### 1. Buy hosting
The cheapest VentraIP **shared hosting** plan is plenty — this is a small static
site, no database or special software needed.

### 2. Upload the files to the web root
Two ways; either is fine:

**Easiest — cPanel File Manager (no software to install):**
1. Log into VentraIP hosting → open **cPanel** → **File Manager**.
2. Go into the **`public_html`** folder (this is the web root — what visitors see).
3. Make sure it's empty (delete any default "coming soon"/placeholder file).
4. Click **Upload**, upload `horizon-site.zip`.
5. Back in File Manager, right-click the zip → **Extract** (into `public_html`).
6. Delete the leftover `horizon-site.zip` afterwards.
7. Confirm `public_html` now contains `index.html` at the top level (NOT inside
   a sub-folder) plus the `css`, `js`, `images`, `data` folders alongside it.

**Or — FTP (if VentraIP/their team prefer):**
- Connect with the FTP details VentraIP provides, and upload the **contents** of
  the unzipped folder into `public_html` (so `index.html` sits directly in
  `public_html`, not in a subfolder).

> Important: `index.html` must end up **directly inside `public_html`**, with the
> `css` / `js` / `images` / `data` folders next to it. If everything lands inside
> an extra sub-folder, the site will 404 — just move the files up one level.

### 3. Point the domain at the hosting
If the domain (**horizonfootballfestival.com.au** — please confirm) is also with
VentraIP, this is usually automatic once hosting is active, or a one-click
"assign domain to hosting" in their panel. VentraIP support can do this. They'll
also provision the free SSL certificate (the https padlock) — make sure SSL is
enabled / "Force HTTPS" is on.

### 4. Test
Visit the domain and check:
- All four pages load (Home, About Horizon, Tournament Info, Register).
- The **Class of 2026 team wall** on the Register page shows the Manly United
  crests (this loads `data/teams.json` via JavaScript — works on normal hosting).
- The **Terms & Conditions accept checkbox** unlocks the Register button.
- The padlock (https) shows.

---

## Updating the site later (important — this changes!)

Right now, updates publish automatically. Once on VentraIP, **every change means
re-uploading the affected files** via cPanel File Manager or FTP. Most common:

- **A new club registers:** add their crest image to `images/clubs/` and add one
  line to `data/teams.json`, then re-upload those two files. (Scott can prepare
  the updated files.)
- **Copy / content changes:** re-upload the changed `.html` file.

Keep a master copy of the site files somewhere safe (Scott has the source).

---
*Confirm with Scott: the exact domain name, and that you've received
`horizon-site.zip`.*
