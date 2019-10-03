const routes = require('next-routes')();
routes
.add('/show/:address', '/show');

module.exports = routes;
