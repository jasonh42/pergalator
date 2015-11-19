var Vue = require("vue");
require('./detail.scss');

module.exports = {
    template: require("./detail.html"),
    data: function() {
      return {
        perg: {},
        message: 'hiss'
      }
    },
    ready: function() {
        this.$http.get('/perg.json', function(data) {
            this.$set('perg', data);
        }).error(function(resp) {
            alert("Request loading");
        });
    },
};
