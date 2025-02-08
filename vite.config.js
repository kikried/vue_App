import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import AutoImport from "unplugin-auto-import/vite";
import WindiCSS from "vite-plugin-windicss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      // 目标文件，根据需要调整
      include: [
        /\.[tj]sx?$/, //.ts,.tsx,.js,.jsx 文件
        /\.vue$/,
        /\.vue\?vue/, //.vue 文件
      ],
      // 自动导入 Vue 相关函数和 API
      imports: ["vue", "vue-router"],
      // 解析目录，根据需要调整
      dirs: ["./src/composables"],
      // 生成相应的声明文件
      dts: "./auto-imports.d.ts",
    }),
    WindiCSS({
      scan: {
        dirs: ["."], // 当前目录下所有文件
        fileExtensions: ["vue", "js", "ts"], // 同时启用扫描vue/js/ts
      },
    }),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
