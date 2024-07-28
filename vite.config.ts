import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import react from "@vitejs/plugin-react";
import glob from "fast-glob";
import normalize from "normalize-path";
import { defineConfig } from "vite";

const rel = (...paths: string[]) =>
  resolve(dirname(fileURLToPath(import.meta.url)), ...paths);

const getImports = (): Record<string, string> => {
  const entries = glob.sync(["./src/**/*.tsx", "!src/**/*.stories.tsx"]);

  return entries.reduce((w, cur) => {
    const dir = dirname(cur).substring("./src/".length);
    const entry = basename(cur, ".tsx");
    w[normalize(join(dir, entry))] = rel(cur);

    return w;
  }, {});
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    copyPublicDir: false,
    lib: {
      entry: getImports(),
      fileName: "[name].[format]",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [
        "clsx",
        "next/link",
        "tailwind-merge",
        "react",
        "react/jsx-runtime",
        "react-dom",
        "react-color",
        "shiki",
      ],
      output: {
        preserveModules: true,
      },
    },
  },
});
