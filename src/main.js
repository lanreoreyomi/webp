import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
 import VueMeta from 'vue-meta';
import AOS from 'aos'
import 'aos/dist/aos.css'
var VueScrollTo = require('vue-scrollto');


const app = createApp(App);
app.AOS = new AOS.init({ disable: "phone" });
app.use(VueScrollTo, {
 container: "body",
 duration: 500,
 easing: "ease",
 offset: 0,
 force: true,
 cancelable: true,
 onStart: false,
 onDone: false,
 onCancel: false,
 x: false,
 y: true
})
app.use(router, VueMeta, AOS).mount("#app");