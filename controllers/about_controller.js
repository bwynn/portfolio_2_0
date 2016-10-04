"use strict";

const About = require('../models/about_model');

// get about section
// /get_about_section - GET
exports.getAboutSection = (req, res) => {
  About.find((err, aboutData) => {
    if (err) {
      res.send(err);
    }

    res.json(aboutData); 
  });
};
