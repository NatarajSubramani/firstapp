var request = require('request');
module.exports = function (loc, callback) {
 var city = encodeURIComponent(loc);
 //console.log(city);
  var url = 'http://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=imperial&appid=44db6a862fba0b067b1930da0d769e98';

    request({ url: url, json: true }, function (err, res, body) {
        callback(body.main.temp, loc);
    });
}