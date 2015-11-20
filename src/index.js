import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './components/app'
import { configRouter } from './routes'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:3000';
const router = new VueRouter();
configRouter(router);

// bootstrap the app
router.start(App, '#app');