const Note = require('./model.js');

const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
    return notes;
  } catch (error) {
    res.status(500).json({ error });
    return error;
  }
};

const createNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
    return note;
  } catch (error) {
    res.status(500).json({ error });
    return error;
  }
};

module.exports = {
  getNotes,
  createNote,
};
