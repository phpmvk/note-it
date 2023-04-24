const baseUrl = 'http://localhost:3001';

export const getNotes = () => {
  // console.log('hello from getNotes');
  return fetch(baseUrl + '/notes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => {
    return res.json();
  });
};

export const createNote = note => {
  console.log('i am the note inside the createnote', note);
  return fetch(`${baseUrl}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  }).then(res => res.json());
};

export const deleteNote = note => {
  console.log('i am the note inside the deletenote', note._id);
  return fetch(`${baseUrl}/notes/${note._id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
};

export const updateNote = note => {
  console.log('i am the note inside the updatenote', note);
  return fetch(`${baseUrl}/notes/${note._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  }).then(res => res.json());
};

export const getUserNote = id => {
  return fetch(`${baseUrl}/notes/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
};

// endpoints for notes
// GET /notes(read all notes)
// POST /notes(create a note)
// GET /notes/:id(read a note)
// PUT /notes/:id(update a note)
// DELETE /notes/:id( delete a note)
