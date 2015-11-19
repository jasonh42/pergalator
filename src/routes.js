export function configRouter (router) {

    router.map({
        '': {
            component: require('./components/home/home.js')
        },
        '/foo': {
            component: require('./components/foo/foo.js')
        },
        '/perg/:id': {
            component: require('./components/perg-detail/detail.js')
        }
        '/create-perg': {
            component: require('./components/create-perg/create-perg.js')
        },

        // not found handler
        //'*': {
        //    component: require('./components/not-found.js')
        //}
    });

}
