const router = require('express').Router();
const controller = require('./controller');

// router.get('/', (req, res) => {
//   res.send('Hello World!');
// });
router.get('/', async (req, res) => {
  return res.json({ message: 'Hello, World ✌️' });
});
router.post('/notes', controller.createNote);
router.get('/notes', controller.getNotes);
router.get('/notes/:id', controller.getNote);
router.put('/notes/:id', controller.updateNote);
router.delete('/notes/:id', controller.deleteNote);

module.exports = router;
