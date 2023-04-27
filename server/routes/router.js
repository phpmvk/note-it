const router = require('express').Router();
const controller = require('../controllers/controller');

router.get('/notes', controller.getAllNotes);
router.post('/notes', controller.createNote);

router.get('/notes/:id', controller.getNote);
router.put('/notes/:id', controller.updateNote);
router.delete('/notes/:id', controller.deleteNote);

router.all('*', (_, res) => {
  res.status(302).redirect('/')
})

module.exports = router;