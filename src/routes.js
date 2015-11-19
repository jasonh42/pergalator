export function configRouter (router) {

    router.map({
        '/foo': {
            component: require('./components/foo/foo.js')
        }

        // not found handler
        //'*': {
        //    component: require('./components/not-found.js')
        //}
    });

}