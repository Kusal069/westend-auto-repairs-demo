# Westend Auto Repairs demo — delivery

Date: 21 October 2026

## Paths

- Workspace: `/Users/kusal/OpenBot/Agents/agent-f76dbf7d-7345-4c2e-af35-0581957e8b50/westend-auto-repairs`
- Shared copy: `/Users/kusal/OpenBot/Shared/Transfers/westend-auto-repairs-demo`

## URLs

- GitHub: https://github.com/Kusal069/westend-auto-repairs-demo
- Live (GitHub Pages): https://kusal069.github.io/westend-auto-repairs-demo/
- Vercel: not deployed. CLI reports logged out. Unblock: `vercel login` (or a Vercel token), then `vercel --yes --prod` in the project folder.

## Pages

Home, Work, Services, About, Reviews, Contact.

## Redesign notes

Inspired by the structure of https://jd-roofing-lake.vercel.app/ (inspected live as a compiled SPA). Source, roofing copy, branding, and unsupported claims were not copied.

## Image credits

Original SVG illustrations only. Google Maps and Facebook photos were not downloaded. See `CREDITS.md`.

## Checks

- Local `python3 -m http.server 4173`: all pages and original SVG assets HTTP 200; internal links 200
- Chrome headless screenshots: desktop 1440, tablet 768, mobile 390 on Home; desktop Work/Services/Contact
- Form script still `preventDefault`; contact copy states “Nothing was sent”
- Live Pages: verified after this push
- Vercel: not attempted (CLI logged out)

## Remaining limitations

- No Google Maps or Facebook photos (no commercial reuse grant or documented owner permission)
- Owner-photo frames are labelled placeholders
- No hours, email, WhatsApp, prices, service menu, credentials, testimonials, warranties, free-quote or emergency claims
- Callback form does not send
- GitHub Pages cannot set HTTP security headers (`SECURITY.md`)
- No AutoRepair JSON-LD
- Independent demo label remains on every page
