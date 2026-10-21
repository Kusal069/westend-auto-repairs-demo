# Security headers — hosting limits

This demo is served on **GitHub Pages**, which does not allow custom HTTP response headers (`Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options`). That limitation is not fixed on this host.

## What this static demo can set

Each HTML page includes:

- `<meta name="referrer" content="strict-origin-when-cross-origin">`
- `<meta http-equiv="Content-Security-Policy" …>` covering `default-src 'self'`, scripts/styles/images from this origin, Google Fonts, `form-action 'none'`, and `base-uri 'self'`

Meta CSP does **not** apply `frame-ancestors`. Meta tags cannot set `X-Content-Type-Options` or `Permissions-Policy`.

## What a production host should add as HTTP headers

`vercel.json` lists the intended headers for Vercel or another host that supports them. They are inactive on GitHub Pages.

- `Content-Security-Policy` (including `frame-ancestors 'none'`)
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `X-Robots-Tag: noindex, nofollow`
