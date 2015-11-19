var Vue = require("vue");
var validator = require('vue-validator')

Vue.use(validator)

require('./create-perg.scss');
module.exports = {
    template: require("./create-perg.html"),
    ready: function() {
    },
    methods: {
    }
};
