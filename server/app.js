const express = require('express');
const path = require('path');
const rateLimit = require('express-rate-limit')
const errorHandler = require('../middleware/error')
var morgan = require('morgan');
require('dotenv').config();

const app = express();

const logger = (req, res, next) => {
    morgan(':method :url :status :response-time ms - :res[content-length]')
    console.log("Ran morgan logger")
    next();
};

// Enable morgan logging
app.use(logger);

// Rate limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 Mins
    max: 100,
  })
app.use(limiter)
app.set('trust proxy', 1)

// Set static folder
//app.use(express.static('public'))

// Routes
app.use('/', require('../routes'))

// Error handler middleware
app.use(errorHandler)

// When making calls to the OMDB API make sure to append the '&apikey=78bd01fe' parameter

module.exports = app;