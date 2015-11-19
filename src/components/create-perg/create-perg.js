var Vue = require("vue");

require('./create-perg.scss');
module.exports = {
    template: require("./create-perg.html"),
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
        },

      }
    },
    ready: function() {
    },
    methods: {
    }
};
