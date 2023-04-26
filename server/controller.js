const Note = require('./model.js');

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
    res.status(200).json(note);
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
    note.title = req.body.title;
    note.body = req.body.body;
    note.date = req.body.date;
    note.notebook = req.body.notebook;
    note.user = req.body.user;
    note.favorite = req.body.favorite;
    console.log('note in the controller after change', note);
    await note.save();
    res.status(200).json(note);
    return note;
  } catch (error) {
    res.status(500).json({ error });
    return error;
  }
};

const deleteNote = async (req, res) => {
  console.log('deleteNote called in the controller', req.params.id);
  try {
    const note = await Note.findById(req.params.id);
    console.log(note);
    await Note.deleteOne(note);
    res.status(200).json(note);
    console.log('sucess');
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
