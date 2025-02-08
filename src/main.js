import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router/index.js";
import App from "./App.vue";

const app = createApp(App);

app.use(createPinia()).use(router).use(ElementPlus).mount("#app");
