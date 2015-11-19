export function configRouter (router) {

    router.map({
        '': {
            component: require('./components/home/home.js')
        },
        '/foo': {
            component: require('./components/foo/foo.js')
        },
        '/perg': {
            component: require('./components/perg-detail/detail.js')
        }

        // not found handler
        //'*': {
        //    component: require('./components/not-found.js')
        //}
    });

}
