"use strict";

const path = require('path');

module.exports = (app) => {
  // back end routes

  // hero routes
  const heroCtrl = require('../controllers/hero_controller');
    // get route <- front end route
    app.get('/get_hero_section', heroCtrl.getHeroSection);
    // post route
    // update route
    // delete route

  // about routes
  const aboutCtrl = require('../controllers/about_controller');
    // get route <- front end route
    app.get('/get_about_section', aboutCtrl.getAboutSection);
    // post route
    // update route
    // delete route


  // project routes
  const projectCtrl = require('../controllers/project_controller');
    // get route <- front end route
    app.get('/get_projects', projectCtrl.getAllProjects);
    // post route
    // update route
    // delete route

  // contact routes
  const contactCtrl = require('../controllers/contact_controller');
    // get route <- front end route available
    app.get('/get_messages', contactCtrl.getAllMessages);
    // post route <- front end route available
    app.post('/send_message', contactCtrl.sendMessage);
    // update route
    // delete route

  // front end routes
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "../public/index.html"));
  });
};
