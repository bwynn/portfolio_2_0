"use strict";

const Project = ('../models/project_model');

// get all projects
// /get_projects - GET 
exports.getAllProjects = (req, res) => {

  Project.find((err, projects) => {
    if (err) {
      res.send(err);
    }

    res.json(projects);
  });
};
