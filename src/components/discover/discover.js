require('./discover.scss');
require('jquery');
require('bootstrap-sass');

module.exports = {
    template: require("./discover.html"),
    props: ['searchText'],
    data: function() {
        return {
            showFilters: false
        }
    },
    components: {
        'filters': require('./filters/filters.js')
    }
};
