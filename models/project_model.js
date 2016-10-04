"use strict";

const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  picture: {type: Schema.Types.Mixed},
  headline: String,
  description: String,
  github: String,
  site: String
});

module.exports = mongoose.model('Project', ProjectSchema);
