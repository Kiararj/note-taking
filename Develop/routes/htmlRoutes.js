
const express = require('express');
const path = require('path');
const app = express.Router();

// HTML roue
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '../public/index.html'));
  }); 
  
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname + '../public/notes.html'));
  });

  module.exports = app;