import { resolve } from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import solid from "vite-plugin-solid";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    resolve: {
      alias: {
        "@renderer": resolve("src/renderer/src"),
      },
    },
    plugins: [
      tanstackRouter({
        target: "solid",
        autoCodeSplitting: true,
      }),
      solid(),
      tailwindcss(),
    ],
  },
});
