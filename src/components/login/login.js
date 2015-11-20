require('./login.scss');
module.exports = {
    template: require("./login.html"),
    ready: function() {
        $("body").addClass("bgcontainer");
    },
    destroyed: function() {
        $("body").removeClass("bgcontainer");
    }
};