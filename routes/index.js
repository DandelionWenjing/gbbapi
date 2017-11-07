const gbbapiRoutes = require('./gbbapi_routes');

module.exports = function(app, db) {
    gbbapiRoutes(app, db);
};