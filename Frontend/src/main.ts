import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import {} from "./services";


import "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import 'bootstrap/dist/js/bootstrap.js'
import "@/assets/style.css";


createApp(App).use(router).mount("#app");



