import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './components/app'
import { configRouter } from './routes'

Vue.use(VueRouter);
Vue.use(VueResource);
const router = new VueRouter();
configRouter(router);

// bootstrap the app
router.start(App, '#app');