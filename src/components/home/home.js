var Vue = require("vue");

var pergs = [
    {name: "Perg 1 "},
    {name: "Perg 2"}
]

module.exports = {
    template: require("./home.html"),
    components: {
        'discover': require('./../discover/discover.js'),
        "perg-collection": require("./../perg-collection/collection.js")
    },
    data: function() {
        return {
            pergs: pergs
        }
    }
};