const Note = require('../models/model');

const getNotes = async (req, res) => {
  console.log('getnotes called in the controller');
  try {
    const notes = await Note.find();
    res.status(200).json(notes);

    // console.log('res in the controller', res);
    return notes;
  } catch (error) {
    res.status(500).json({ error });
    return error;
  }
};

const createNote = async (req, res) => {
  try {
    console.log('createNote called in the controller,request body', req.body);
    const note = await Note.create(req.body);
    res.status(201).json(note);
    console.log('success');
    return note;
  } catch (error) {
    res.status(500).json({ error });
    return error;
  }
};

const getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if(note) res.status(200).json(note);
    else res.status(404).json({ error: 'No note found with provided ID' })
    
    return note;
  } catch (error) {
    res.status(500).json({ error });
    return error;
  }
};

const updateNote = async (req, res) => {
  console.log('updateNote called in the controller');
  console.log(req.body);

  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404).json({ error: 'No note found with provided ID' })
      return 
    }
    note.title = req.body.title;
    note.body = req.body.body;
    note.date = req.body.date;
    note.notebook = req.body.notebook;
    note.user = req.body.user;
    note.favorite = req.body.favorite;
    console.log('note in the controller after change', note);
    try {
      await note.save();
      res.status(200).json(note);
    } catch (e) {
      console.error(e);
      res.status(409).json({ error: 'Failed to update note' })
    }
  } catch (error) {
    res.status(500).json({ error });
    return error;
  }
};

const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) { 
      res.status(404).json({ error: 'Could not find note' })
      return
    }
    await Note.deleteOne(note);
    res.status(200).json(note);
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
