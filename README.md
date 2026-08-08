# Santa Fe Septic (`santafeseptic.com`)

Local SEO / rank-and-rent site for septic pumping, repair, installation, drainfield work, inspections, and emergency service in Santa Fe County, NM.

## Stack

- [Astro](https://astro.build) (static) + Tailwind CSS v4
- Deploy target: **Cloudflare Pages**

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Output goes to `dist/` (what Cloudflare Pages serves).

---

## Deploy to Cloudflare Pages + custom domain

Do this **after** you buy the domain. Ideal path: buy **santafeseptic.com** on [Cloudflare Registrar](https://dash.cloudflare.com/?to=/:account/domains/register) so DNS stays in one place.

### Option A — Git-connected (recommended)

1. Create a GitHub repo and push this project (`main` branch).
2. In Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the repo. Build settings:

   | Setting | Value |
   |---------|--------|
   | Framework preset | Astro (or None) |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Node version | `22` (Pages → Settings → Environment variables → `NODE_VERSION=22`) |

4. Deploy. You’ll get `https://santafe-septic.pages.dev` (or similar).
5. **Custom domains** → Add `santafeseptic.com` and `www.santafeseptic.com`.
6. If the domain is already on Cloudflare DNS, Pages will attach the records. If it’s elsewhere, either transfer in or point nameservers / CNAME as Cloudflare instructs.
7. Set **www → apex** (or apex → www) redirect in Pages custom domains once both are verified.

### Option B — CLI deploy (no Git)

```bash
npx wrangler login
npm run pages:deploy
```

Then attach the custom domain in the dashboard on the `santafe-septic` Pages project (same step 5–7 above).

### After the domain is live

1. Wire the contact form in `src/pages/contact/index.astro`.
2. Confirm `site.url` in `astro.config.mjs` / `src/data/site.ts` matches the live domain (already `https://santafeseptic.com`).
3. Submit the sitemap / URL in Google Search Console.

## Page map

| URL | Purpose |
|-----|---------|
| `/` | Home / brand + silo hub |
| `/septic-pumping/` … `/emergency-septic/` | Money pages (`near me` / `near you`) |
| `/service-areas/` + area slugs | Local silo |
| `/about/` `/contact/` | Trust + conversion |

## SEO copy

- Home keywords: `src/data/seo.ts`
- Service keywords: `src/data/services.ts`
- Contact / NAP: `src/data/site.ts`
