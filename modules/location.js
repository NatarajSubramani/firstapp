var request = require('request');

module.exports = function (callback) {
    var url = 'http://ipinfo.io';
    request({ url: url, json: true }, function (err, res, body) {
        callback(body.country);
    })
}

