const express = require('express');

const router = express.Router();
const passport = require('passport');

const commentsController = require('../controllers/comments_controller');

router.post('/create', passport.authenticate('jwt', { session: true }), commentsController.create);
router.get('/destroy/:id', passport.authenticate('jwt', { session: true }), commentsController.destroy);


module.exports = router;