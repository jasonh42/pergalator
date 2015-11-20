require('./discover.scss');
require('jquery');
require('bootstrap-sass');

module.exports = {
    template: require("./discover.html"),
    props: ['searchText'],
    data: function() {
        return {
            showFilters: false,
            activeCreate: false
        }
    },
    components: {
        'filters': require('./filters/filters.js'),
        'create-perg': require("./../create-perg/create-perg.js")
    }
};
