"use strict";

const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const AboutSchema = new Schema({
  description: String,
  languages: [{type: Schema.Types.Mixed}]
});

module.exports = mongoose.model('About', AboutSchema);
