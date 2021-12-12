const express = require('express');

const router = express.Router();
const passport = require('passport');

const postController = require('../controllers/posts_controller');

router.post('/create', passport.authenticate('jwt', { session: true }), postController.create);
router.get('/destroy/:id', passport.authenticate('jwt', { session: true }), postController.destroy);

module.exports = router;