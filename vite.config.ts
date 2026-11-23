import { copyFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "thank-you-static-route",
      writeBundle(options) {
        const outputDir = resolve(options.dir ?? "dist");
        const routeDir = resolve(outputDir, "thank-you");
        mkdirSync(routeDir, { recursive: true });
        copyFileSync(resolve(outputDir, "index.html"), resolve(routeDir, "index.html"));
        copyFileSync(resolve(outputDir, "index.html"), resolve(outputDir, "404.html"));
      },
    },
  ],
  // The site uses a custom domain, so it is hosted from the domain root.
  base: "./",
});
