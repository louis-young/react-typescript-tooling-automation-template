import { defineConfig } from "vite";
import { checker } from "vite-plugin-checker";
import react from "@vitejs/plugin-react";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        // prettier-ignore
        lintCommand: "eslint \"./**/*.{js,jsx,ts,tsx}\"",
      },
    }),
  ],
  server: {
    host: true,
    open: true,
    port: 3000,
  },
});
