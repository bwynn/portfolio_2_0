"use strict";

const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const HeroSchema = new Schema({
  headline: String,
  overview: String,
  picture: {type: Schema.Types.Mixed}
});

module.exports = mongoose.model('Hero', HeroSchema);
