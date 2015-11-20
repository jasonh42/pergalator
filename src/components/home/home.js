require('./home.scss');

module.exports = {
    template: require("./home.html"),
    components: {
        'discover': require('./../discover/discover.js'),
        "perg-collection": require("./../perg-collection/collection.js")
    },
    data: function() {
        return {
            pergs: [],
            searchText: ""
        }
    },
    ready: function() {

        this.$http.get('https://gentle-shore-8434.herokuapp.com/groups', function(data) {
            this.$set('pergs', data);
        }).error(function() {
            console.log("Error");
        });

    }

};