const Note = require('./model.js');

const getNotes = async (req, res) => {
  console.log('getnotes called in the controller');
  try {
    const notes = await Note.find();
    res.status(200).json(notes);

    console.log('res in the controller', res);
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

const getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.status(200).json(note);
    return note;
  } catch (error) {
    res.status(500).json({ error });
    return error;
  }
};

const updateNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    note.title = req.body.title;
    note.content = req.body.content;
    note.date = req.body.date;
    note.notebook = req.body.notebook;
    note.user = req.body.user;
    await note.save();
    res.status(200).json(note);
    return note;
  } catch (error) {
    res.status(500).json({ error });
    return error;
  }
};

const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    await note.remove();
    res.status(200).json(note);
    return note;
  } catch (error) {
    res.status(500).json({ error });
    return error;
  }
};

module.exports = {
  getNotes,
  createNote,
  getNote,
  updateNote,
  deleteNote,
};
