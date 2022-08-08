// Imports
var express = require('express');
var excusesCtrl = require('./routes/excusesController');

// Router
exports.router = (function() {
    var apiRouter = express.Router();

    // Excuses routes
    apiRouter.route('/excuses').post(excusesCtrl.registerExcuses);
    apiRouter.route('/excuses').get(excusesCtrl.getExcuses);

    return apiRouter;
})();