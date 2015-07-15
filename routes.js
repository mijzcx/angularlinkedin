
module.exports.setApi = function (app, api) {

    app.get('/v1/customers', function (req, res, next) {
        api.getCustomers(req, res, next);
    });
   
};