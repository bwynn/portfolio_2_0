"use strict";

const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: String,
  email: String,
  message: String,
  date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Contact', ContactSchema); 
