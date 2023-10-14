import { createSSRApp } from "vue";
import App from "./App.vue";
import uView from "./uni_modules/vk-uview-ui";
import tmui from "./uni_modules/tmui";
// import 'animate.css';
import * as Pinia from "pinia";

export function createApp() {
  const app = createSSRApp(App);
  app.use(Pinia.createPinia());
  app.use(uView);
  app.use(tmui, {} as Tmui.tmuiConfig);
  return {
    app,
  };
}
