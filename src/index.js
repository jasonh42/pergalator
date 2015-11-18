import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/app'
import { configRouter } from './routes'

// install router
Vue.use(VueRouter);

// create router
const router = new VueRouter({
    history: true,
    saveScrollPosition: true
});

// configure router
configRouter(router);

// boostrap the app
router.start(App, '#app');

// just for debugging
window.router = router;