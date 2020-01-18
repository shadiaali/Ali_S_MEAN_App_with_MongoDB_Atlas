var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//require the schema model
var Movie = require('../models/Movie.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;