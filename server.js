
var express = require('express');
var app = express();

var api = require('./api');
var routes = require('./routes');

// web client
app.use(express.static(__dirname + '/client'));

// routes
routes.setApi(app, api);

// serve
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Express serving on port ' + port);
});
