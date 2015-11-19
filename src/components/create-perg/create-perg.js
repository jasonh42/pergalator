var Vue = require("vue");
require('bootstrap-sass');
require('./create-perg.scss');

module.exports = {
    template: require('./create-perg.html'),
    data: function() {
      return {
        perg: {
          name: '',
          city: '',
          state: '',
          imageURL: '',
        },
        user: {
          firstName: '',
          lastName: '',
          email: '',
        },
        locations: {},
      }
    },
    ready: function() {
      this.$http.get('/locations.json', function(data) {
          this.$set('locations', data);
      }).error(function(resp) {
          alert("Request loading");
      });
    },
    methods: {
    }
};
