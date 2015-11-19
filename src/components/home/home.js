var Vue = require("vue");

module.exports = {
    template: require("./home.html"),
    components: {
        'filters': require('./../discover/discover.js')
    }
};