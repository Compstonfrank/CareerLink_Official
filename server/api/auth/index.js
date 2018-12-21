const router = require('express').Router();
//need to bring in each model

//These routes are mounted on /api/auth

//Link to O-Auth
router.use('/facebook', require('./facebook'));
router.use('/github', require('./github'));
router.use('/google', require('./google'));

//MANUAL LOGIN ROUTES HERE

module.exports = router;
