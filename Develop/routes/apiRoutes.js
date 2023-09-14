const express = require('express');
const app = express.Router();
const fs = require('fs');
const uuid = require('uuid');

// Reads notes from db.json
app.get('/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  res.json(notes);
});

// Saves a new note to db.json
app.post('/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = uuid.v4(); // Generate a unique ID for the note
  const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
  notes.push(newNote);
  fs.writeFileSync('./db.json', JSON.stringify(notes));
  res.json(newNote);
});

module.exports = app;