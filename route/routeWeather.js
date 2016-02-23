var location = require('../modules/location.js');
var weather = require('../modules/weather.js');

module.exports = function (app) {

    app.get('/location', function (req, res) {

        if (req.query.cityName !== '') {
            weather(req.query.cityName, function (currentWeather, loc) {
                res.render('weatherDisplay.ejs', { temp: currentWeather, city: loc })
            })//end of weather functions
        }//end of if statements
        else {
            location(function (loc) {
                weather(loc, function (currentWeather, loc) {
                    res.render('weatherDisplay.ejs', { temp: currentWeather, city: loc })
                })//end of weather function
               console.log(loc);
            })//end of location function
                
            
        }//end of else statement
    })//end of get method
}//end of module.exports


            
