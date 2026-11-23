# Fischer Solutions

Website for Fischer Solutions, built with TanStack Start, React, and Tailwind CSS.

## Local Development

Requires Node.js and npm.

```sh
npm install
npm run dev
```

Run `npm run build` to create a production build and `npm run preview` to serve it locally.

## Microsoft Clarity

Create a Clarity project and copy its project ID from **Settings > Overview**. Add the ID to `.env.local`:

```env
VITE_CLARITY_PROJECT_ID=your_project_id
```

Restart the dev server after changing the value. Set the same variable in your production build environment before building and deploying; Vite embeds `VITE_*` values into the client bundle. The ID is public browser configuration, not a secret. If your project requires cookie consent, connect Clarity's consent API to your consent flow before granting tracking consent.
