import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
 import VueMeta from 'vue-meta';
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App);
app.AOS = new AOS.init({ disable: "phone" });

app.use(router, VueMeta, AOS).mount("#app");