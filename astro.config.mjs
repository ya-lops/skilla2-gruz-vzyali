import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";
// import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  
  adapter: vercel(),

  // adapter: node({
  //   mode: "standalone",
  // }),

  compressHTML: false,

  security: {
    checkOrigin: false,
  },

  prefetch: true,

  vite: {
    optimizeDeps: {
      force: true,
    },

    build: {
      cssCodeSplit: true,
    },

    css: {
      devSourcemap: false,
    },

    plugins: [tailwindcss()],
  },

  devToolbar: {
    enabled: false,
  },
});
