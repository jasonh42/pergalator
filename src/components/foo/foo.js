var Vue = require("vue");
require('./foo.scss');
module.exports = {
    template: require("./foo.html"),

    data: function() {
      return {
        events: [],
        message: 'hi'
      }
    },

    ready: function() {
        this.$http.get('/events.json', function(data) {
            this.$set('events', data);
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
