# Westend Auto Repairs demo — delivery

Date: 21 October 2026

## Paths

- Workspace: `/Users/kusal/OpenBot/Agents/agent-f76dbf7d-7345-4c2e-af35-0581957e8b50/westend-auto-repairs`
- Shared copy: `/Users/kusal/OpenBot/Shared/Transfers/westend-auto-repairs-demo`

## URLs

- GitHub: https://github.com/Kusal069/westend-auto-repairs-demo
- Live (GitHub Pages, HTTP 200 verified): https://kusal069.github.io/westend-auto-repairs-demo/
- Vercel: not deployed. CLI reports logged out. Unblock: `vercel login` (or a Vercel token), then `vercel --yes --prod` in the project folder.

## Pages

Home, Services, About, Reviews, Contact.

## Checks

- Local `python3 -m http.server 4173`: all pages 200
- Browser: nav, mobile menu, demo form shows “Nothing was sent”
- Live Pages: home/services/contact/css/js 200
