import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import { createPinia } from "pinia";

const pinia = createPinia();

import "@/assets/css/style.scss";

createApp(App).use(pinia).use(router).mount("#app");
