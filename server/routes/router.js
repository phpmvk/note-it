const router = require('express').Router();
const controller = require('../controllers/controller');

router.post('/notes', controller.createNote);
router.get('/notes', controller.getNotes);
router.get('/notes/:id', controller.getNote);
router.put('/notes/:id', controller.updateNote);
router.delete('/notes/:id', controller.deleteNote);
router.all('*', (req, res) => {
  console.log('-----------------------hi-----------------------')
  res.status(302).redirect('/')
})

module.exports = router;
