import {createApp} from "vue";
import "./assets/css/index.css";
import "./axiosconfig.ts";
import router from "./routes/router.ts";
import store from "./stores/store.ts";
import App from "./App.vue";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
