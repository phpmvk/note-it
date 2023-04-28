const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  favorite: {
    type: Boolean,
    required: true,
  },
});

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;
