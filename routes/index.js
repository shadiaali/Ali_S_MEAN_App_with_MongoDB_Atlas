var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//require the schema model
var Movie = require('../models/Movie.js');


/* GET home page. */
router.get('/', function (req, res, next) {
  //a WHERE clause. narrow it down. give it a limit
  var q = Movie.find().limit(20);
  q.exec(function (err, movies) {
    if (err) return next(err);
    //res.json(movies);
    res.render('index', {
      pagetitle: 'Movie List',
      movies: movies
    });

    /**
     * * if there's an error, return it and stop execution
     * * otherwise render out the movies as json
     * * every route should have json rendered out FIRST. 
     * * Rob wants to see this for EVERY ROUTE
     * * Vue is all about json. You only want RAW json data
     * * in Vue you don't need to build out any ejs views 
     * * Vue handles all the json data because it is a View (vue) engine!
     * * no need for ejs or handlebars in Vue!
     * * comment OUT routes for vue. they're not needed.
     */

    //Movie.find(function (err, movies) {
    //  if (err) return next(err);
    //  res.json(movies);

  });

});

//in laravel, you would use {id}
router.get('/movies/:id', function (req, res, next) {

  Movie.findOne({
    '_id': req.params.id
  }, function (err, movie) {
    //if there's an error give it to us
    if (err) return next(err);
    //res.json(movie);
    res.render('details', {
      title: 'movie',
      movie: movie
    });

  }); //end of find query
}); //end of route

/* GET fantasy. */
router.get('/fantasy', function (req, res, next) {
  //a WHERE clause. narrow it down. give it a limit
  var q = Movie.find({
    genres: 'Fantasy'
  }).limit(20);
  q.exec(function (err, movies) {
    if (err) return next(err);
    //res.json(fantasy);
    res.render('fantasy', {
      pagetitle: 'fantasy movies',
      movies: movies
    });

  });

});


/* sort ascending/worst rated movies. */
router.get('/:sort', function (req, res, next) {
  //a WHERE clause. narrow it down. give it a limit
  var q = Movie.find().limit(20).sort({
    'imdb.rating': 1
  });
  q.exec(function (err, movies) {
    if (err) return next(err);
    //res.json(movies);
    res.render('index', {
      pagetitle: 'movies sorted by ascending order',
      movies: movies
    });

  });

});


module.exports = router;