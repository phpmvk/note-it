const Note = require('../models/model');

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error });
  }
};

const createNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error });
  }
};

const getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if(note) res.status(200).json(note);
    else res.status(404).json({ error: 'No note found with provided ID' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error });
  }
};

const updateNote = async (req, res) => {
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
    try {
      await note.save();
      res.status(200).json(note);
    } catch (error) {
      console.error(error)
      res.status(409).json({ error: 'Failed to update note' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error });
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
    console.error(error)
    res.status(500).json({ error });
  }
};

module.exports = {
  getAllNotes,
  createNote,
  getNote,
  updateNote,
  deleteNote,
};
