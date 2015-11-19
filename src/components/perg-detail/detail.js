var Vue = require("vue");
require('./detail.scss');

module.exports = {
    template: require("./detail.html"),
    data: function() {
      return {
        perg: {}
      }
    },
    ready: function() {
        this.$http.get('/pergs.json', function(data) {
            var self = this;
            var item = data.find(function(item, index, arr) {
              if(item.id === self.$route.params.id) {
                return true;
              } else {
                return false;
              }
            });
            this.$set('perg', item);
        }).error(function(resp) {
            alert("Request loading");
        });
    },
};
