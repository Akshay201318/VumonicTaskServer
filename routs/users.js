const express = require('express');

const router = express.Router();

const passport = require('passport');

const usersController = require('../controllers/users_controller');


router.get('/profile/:id', passport.authenticate('jwt', { session: true }), usersController.profile);
router.post('/update/:id',passport.authenticate('jwt', { session: true }), usersController.update);
router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);
router.post('/create', usersController.create);
router.get('/sign-out', usersController.destroySession);

// Using passport as a middleware to authenticate
router.post('/create-session', passport.authenticate('jwt', { failureRedirect: '/users/sign-in'}), usersController.createSession);

module.exports = router;