"use strict";

const Message = require('../models/contact_model');

// get messages
exports.getAllMessages = (req, res) => {
  Message.find((err, messages) => {
    if (err) {
      res.send(err);
    }

    res.json(messages);
  });
};

// post messages
exports.sendMessage = (req, res) => {

  const newMsg = new Message();

  newMsg.name = req.body.name;
  newMsg.email = req.body.email;
  newMsg.message = req.body.message;

  newMsg.save((err, message) => {
    if (err) {
      res.send(err);
    }

    res.json(message);
  }); 
};
