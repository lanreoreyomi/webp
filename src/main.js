import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import VueCarousel from 'vue-carousel';
import VueMeta from 'vue-meta';


createApp(App).use(router,(VueScrollTo,{
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
}), VueCarousel, VueMeta).mount('#app')
