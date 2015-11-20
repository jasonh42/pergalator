require('./home.scss');
module.exports = {
    template: require("./home.html"),
    components: {
        'discover': require('./../discover/discover.js'),
        "perg-collection": require("./../perg-collection/collection.js")
    },
    data: function() {
        return {
            welcomeTitle: "What's a PERG?",
            welcomeText: "Pandora encourages all employees to collaborate and socialize with Pandora Employee Resource Groups (PERGs).  Employee Groups are voluntary, employee driven groups that are organized around a particular shared interest. We encourage motivated employees to initiate their own PERG. Each one should reflect our culture and preserve the spirit of Pandora’s Principles. PERGs should be inclusive to all staff participation and promote socialization through a shared interest or hobby. Pandora will provide each group with 5 people or more a $1000 allowance to use toward expenses to help support their efforts. Get involved!",
            pergs: [],
            searchText: ""
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