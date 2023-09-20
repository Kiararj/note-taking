const express = require('express');
const router = express.Router();
const fs = require('fs');
const uuid = require('uuid');

// Read notes from db.json
router.get('/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync('./db.json', 'utf8'));
  res.json(notes);
});

// Save a new note to db.json
router.post('/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = uuid.v4(); // Generate a unique ID for the note
  const notes = JSON.parse(fs.readFileSync('./db.json', 'utf8'));
  notes.push(newNote);
  fs.writeFileSync('./db.json', JSON.stringify(notes));
  res.json(newNote);
});

module.exports = router;

