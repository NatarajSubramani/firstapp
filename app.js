var express = require('express');
var app = express();
var ejs = require('ejs');
var weather = require('./modules/weather.js');

var routeWeather = require('./route/routeWeather.js');
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.render('index.ejs');
});

routeWeather(app);

// weather(function(weatherReport){
//     console.log(weatherReport);
// })
app.listen(port);