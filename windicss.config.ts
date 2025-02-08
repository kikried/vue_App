import { defineConfig } from "vite-plugin-windicss";

function range(size, startAt = 1) {
  return Array.from(Array(size).keys()).map((i) => i + startAt);
}

export default defineConfig({
  preflight: false,

  safelist: [
    range(3).map((i) => `p-${i}`), // p-1 到 p-3
    range(10).map((i) => `mt-${i}`), // mt-1 到 mt-10
  ],

  extract: {
    include: ["src/**/*.{vue,html,jsx,tsx}"],
    exclude: ["node_modules", ".git"],
  },
  attributify: true,

  alias: {
    hstack: "flex items-center",
    vstack: "flex flex-col",
    icon: "w-6 h-6 fill-current",
    app: "text-red",
    "app-border": "border-gray-200 dark:border-dark-300",
  },
});
