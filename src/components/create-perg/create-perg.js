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
            var pergObject = {
                "name": this.perg.name,
                "status": "ACTIVE",
                "desc": "This is a perg for people who love " + this.perg.name,
                "avatarUrl": this.perg.imageURL,
                "participants": [],
                "location": this.perg.city,
                "categories": ["FOOD_DRINK"],
                "emailAlias": this.user.email,
                "owner": this.user.firstName + " " + this.user.lastName
            };

            console.log(pergObject);
            this.$http.post('https://gentle-shore-8434.herokuapp.com/groups', pergObject, function() {
                alert("Wow this actually worked");
            });
        }
    }


};
