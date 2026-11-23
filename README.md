# Fischer Solutions Website

React + TypeScript + Vite website for Fischer Solutions. The project uses npm and builds to a static `dist/` directory for GitHub Pages.

## Requirements

- Node.js 22.12 or newer
- npm (included with Node.js)

## Run locally

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

## Build and preview

```powershell
npm run build
npm run preview
```

The production website is generated in `dist/`.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site whenever code is pushed to the `main` branch.

1. Push this project to the `main` branch of `Fischer-Solutions/Fischer-Solutions`.
2. In the GitHub repository, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. The first workflow run will publish the site. Future pushes to `main` deploy automatically.

The custom domain is configured by `public/CNAME` as `fischersolutions.nx.kg`. Keep the existing DNS records pointed at GitHub Pages and do not change them unless GitHub reports a DNS problem.
