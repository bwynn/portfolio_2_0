"use strict";

const Hero = require('../models/hero_model');

// get hero
// /get_hero_section - GET
exports.getHeroSection = (req, res) => {

  Hero.find((err, heroData) => {
    if (err) {
      res.send(err);
    }

    res.json(heroData);
  });
};
