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
  notebook: {
    type: String,
    required: true,
  },
  user: {
    type: Number,
    required: true,
  },
  favorite: {
    type: Boolean,
    required: true,
  },
});

const Note = mongoose.model('Note-app', noteSchema);
module.exports = Note;
