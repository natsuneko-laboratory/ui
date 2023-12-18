import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const rel = (...paths: string[]) =>
  resolve(dirname(fileURLToPath(import.meta.url)), ...paths);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    copyPublicDir: false,
    lib: {
      entry: rel("src/main.tsx"),
      fileName: "index.[format]",
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "clsx",
        "tailwind-merge",
        "react",
        "react/jsx-runtime",
        "react-dom",
      ],
    },
  },
});
