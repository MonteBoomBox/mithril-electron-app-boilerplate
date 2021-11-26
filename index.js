var m = require("mithril")
const Layout = require("./views/Layout")

m.route(document.body, "/", {
    "/": {
        render: function() {
            return m(Layout)
        }
    }
})