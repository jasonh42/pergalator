var Vue = require("vue");
require('./foo.scss');
module.exports = {
    template: require("./foo.html"),

    ready: function() {
        this.$http.get('/whatever', function(data) {

        }).error(function(resp) {
            alert("Request loading");
        });
    },
    methods: {
        abc: function() {
            alert("Clicked");
        }
    }
};