module.exports = {
  testNote: {
    title: 'Test title',
    body: 'Test body',
    date: new Date(),
    notebook: 'Test notebook',
    user: 1,
    favorite: false,
  },
  badNote: {
    title: 'bad note title',
    body: 'bad note body',
    notebook: 'bad notebook',
    user: 1,
    favorite: false,
  },
  updatedNote: {
    title: 'Updated title',
    body: 'Updated body',
    date: new Date(),
    notebook: 'Updated notebook',
    user: 2,
    favorite: true,
  },
  badNoteId: '644a8733053e3ea701f15c97',
  badUpdatedNote: {
    title: 'Updated title',
    body: 'Updated body',
    date: 'potato',
    notebook: 5,
    user: 'two',
    favorite: true,
  },
};
