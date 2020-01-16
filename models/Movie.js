//require mongoose
var mongoose = require('mongoose');

//new schema
//objects are specified in curly braces
//strings can be put in arrays
//if data is stored in a date format you can do much more query wise
//Eg, using greater than or less than in the query.
//You can also subtract this date from this date and it’ll give you the number, etc.
//It is a lot more efficient than strings. 
//you can nest arrays and objects

var movieSchema = new mongoose.Schema({

    poster: String,
    plot: String,
    genres: [String],
    runtime: Number,
    cast: [String],
    num_mflix_comments: Number,
    title: String,
    fullplot: String,
    countries: [String],
    released: Date,
    directors: [String],
    rated: String,
    awards: {
        wins: Number,
        nominations: Number,
        text: String
    },
    lastupdated: Date,
    year: Number,
    imdb: {
        rating: Number,
        votes: Number,
        id: Number
    },
    type: String,
    tomatoes: {
        viewer: {
            rating: Number,
            numReviews: Number,
            meter: Number
        },
        lastupdated: Date,

    },

    //specifying the collection just for shits and giggles
    //collection: 'movies'

});

module.exports = mongoose.model('Movie', movieSchema);