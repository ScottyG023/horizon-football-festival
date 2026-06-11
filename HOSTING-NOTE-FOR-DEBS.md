# Horizon site — hosting & domain (note for Debs)

Short version: **we don't need to buy VentraIP webhosting, and the VentraIP
"migration" service doesn't apply to this site.** Here's why, and what to do
instead.

## Why VentraIP's migration doesn't fit

VentraIP's "migrate from another provider" service is built for traditional
hosting — sites that live on a server you log into via FTP/cPanel (e.g.
WordPress, with a database). Their tool copies all that across.

The Horizon site isn't built that way. It's a **static site** (just HTML/CSS/
images — about 7.5MB of files) served free from **GitHub Pages**. There is:

- no FTP server,
- no cPanel,
- no database,
- no hosting account to migrate *from*.

So if we buy their hosting and request the migration, they'll ask for "FTP
access to the existing site" — and there isn't any to give. Nothing for their
tool to copy.

## What we actually need: just point the domain at the site

The domain (**horizonfootballfestival.com.au** — please confirm this is the one
you registered) stays with VentraIP. We **don't need to buy webhosting at all.**
We just point the domain at the existing site by adding a few DNS records in the
VentraIP control panel. Scott can supply the exact records.

Result: the domain shows the live site, with automatic HTTPS (the padlock), at
no hosting cost, and updates stay quick and easy.

## Is that safe / secure? Yes — arguably safer than shared hosting

- **HTTPS/SSL is automatic and free** (GitHub provisions + renews the
  certificate). Valid padlock, same as any professional host.
- **Nothing to hack.** A static site has no server, no database, no logins —
  so the usual hosting attacks (database breaches, WordPress plugin exploits,
  server vulnerabilities) simply don't apply.
- **No data on the site to leak** — registrations go to the Microsoft Form, not
  the website.
- **Enterprise infrastructure** — GitHub's global CDN, DDoS-protected, high
  uptime.

The only genuine consideration is **ownership/governance**, not security: the
site currently lives in a personal GitHub account. That's fine to run on, but
for a club asset it should eventually move to an MUFC-owned account so it
doesn't depend on one person's login. (Separate, non-urgent — see MANAGEMENT.md.)

## If MUFC would rather host it on VentraIP anyway

Totally doable — it's actually easier than a normal migration. Instead of their
migration tool: buy the cheapest VentraIP shared plan, Scott hands over the full
set of site files, and they're uploaded via VentraIP's file manager/FTP. The
trade-off: a small hosting bill, and future updates (new team crests, copy
tweaks) become more manual (re-upload files) rather than the current one-step
auto-publish.

## Recommendation

Keep the free hosting, just point the VentraIP domain at it. Cheapest, secure,
and keeps updates easy. Scott can provide the DNS records whenever you're ready.

---
*Open items to confirm: (1) the exact domain name; (2) whether MUFC wants the
site on club-controlled hosting now or is happy with the free setup for now.*
