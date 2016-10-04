"use strict";

const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      mongoose = require('mongoose');

// config
// =============================================================================
const db = require('./config/db'),
      port = process.env.PORT || 8080;

const options = {
  server: {
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS: 30000
    }
  },
  replset: {
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS: 30000
    }
  }
};

// connect to db
mongoose.connect(process.env.MONGODB_URI || db.db);

// set up mongoose connection for filestack
const newConnect = mongoose.connection;

newConnect.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// log to console
app.use(morgan('dev'));

// set static file paths
app.use(express.static(__dirname + '/public'));

// routes
// =============================================================================
require('./routes/routes')(app);

// server
// =============================================================================
app.listen(port);

console.log("Server connected on port " + port);

exports = module.exports = app;
