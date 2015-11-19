require('./home.scss');
module.exports = {
    template: require("./home.html"),
    components: {
        'discover': require('./../discover/discover.js'),
        "perg-collection": require("./../perg-collection/collection.js")
    },
    data: function() {
        return {
            pergs: []
        }
    },
    ready: function() {

        this.$http.get('/pergs.json', function(data) {
            this.$set('pergs', data);
        }).error(function() {
            console.log("Error");
        });

    }

};