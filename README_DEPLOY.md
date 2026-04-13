# Free Global Deployment Guide (Custom URL: dilipkumarvenkatesan)

## 1. Netlify (Recommended - Free, Custom Subdomain)
1. Run `npm run build` → creates `dist/` folder.
2. Go to https://app.netlify.com/drop → **Drag the entire `dist/` folder** here.
3. Instant deploy! URL: `random-name.netlify.app`
4. **Custom subdomain:** Site settings → **Site name** → `dilipkumarvenkatesan` → URL: `dilipkumarvenkatesan.netlify.app`
5. Add to LinkedIn: Edit profile → Add website → Paste URL.

**CLI (optional):** `npm i -g netlify-cli && netlify deploy --dir=dist --prod`

## 2. Vercel (Free, CLI)
1. `npm i -g vercel`
2. `vercel --prod` → Follow prompts, set name `dilipkumarvenkatesan` → URL: `dilipkumarvenkatesan.vercel.app`

## 3. GitHub Pages (Free, Git Required)
1. Push code to GitHub repo.
2. Settings → Pages → Source: Deploy from branch `gh-pages` (Vite builds there).
3. URL: `username.github.io/repo`

## Docker Cloud (Free Tier)
- Render.com: New Static Site → Connect GitHub repo (upload dist/) OR Docker service (paste image).
- Railway.app: Deploy Docker image.

Share `dilipkumarvenkatesan.netlify.app` on LinkedIn profile/projects.

dist/ ready for upload (built successfully).
