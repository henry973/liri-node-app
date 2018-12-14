require("dotenv").config();

var request = require('request');

var getMovie = function (movieName) {

    request('http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&apikey=trilogy',
        function (error, response, body) {
            if (!error && response.statusCode == 200) {

                var jsonData = JSON.parse(body);
                console.log('Title: ' + jsonData.Title);
                console.log('Year:' + jsonData.Year);
                console.log('Rated:' + jsonData.Rated);
                console.log('IMDB Rating:' + jsonData.imdbRating);
                console.log('Country:' + jsonData.Country);
                console.log('Language:' + jsonData.Language);
                console.log('Plot:' + jsonData.Plot);
                console.log('Rotten tomatoes rating;' + jsonData.rottenTomatoRating);
                console.log('Actors:' + jsonData.Actors);

                console.log('body:', body);

            }
        });
}

var doWhatItSays = function () {
    fs.readFile('random.txt', 'utf8', function (err, data) {
        if (err) throw err;
        var dataArr = data.split(',');
        if (dataArr.length == 2) {
            pick(dataArr[0], dataArr[1]);
        } else if (dataArr.length == 1) {
            pick(dataArr[0]);
        }

    });
}

var pick = function (caseData, functionData) {
    switch (caseData) {
        case 'movie-this':
            getMovie(functionData);
        case 'do-what-it-says':
            doWhatItSays();
            break;
        default:
            console.log('Liri does not know that');
    }
}

var runThis = function (argOne, argTwo) {
    pick(argOne, argTwo);
};
runThis(process.argv[2], process.argv[3]);


import './keys.js'
import { fstat } from "fs";





