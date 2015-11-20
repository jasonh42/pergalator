require('./collection.scss');

module.exports = {
    template: require("./collection.html"),
    props: ['pergs', 'searchText'],
    methods: {
        getStatusName: function(statusCode) {
        	switch (statusCode) {
        		case 0:
            		return "Recruiting";
        		case 1:
            		return "Reviewing";
        		case 2:
            		return "Active";
        		case 3:
            		return "Inactive";
        	}
        }
    }
};
