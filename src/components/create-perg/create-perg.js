var Vue = require("vue");
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
        onSubmit: function() {
            this.$http.post('https://gentle-shore-8434.herokuapp.com/groups', this.data, function() {
                alert("Wow this actually worked");
            });
        }
    },


};
