const router = require('express').Router();
//need to bring in each model

//These routes are mounted on /api/auth


//Link to O-Auth
router.use('/local', require('./local'));
// router.use('/facebook', require('./facebook'));
// router.use('/github', require('./github'));
// router.use('/google', require('./google'));

module.exports = router;
