export function configRouter (router) {

    router.map({
        '': {
            component: require('./components/home/home.js')
        },
        '/login': {
            component: require('./components/login/login.js')
        },
        '/perg/:id': {
            component: require('./components/perg-detail/detail.js')
        }

        // not found handler
        //'*': {
        //    component: require('./components/not-found.js')
        //}
    });

}
