const router = require('express').Router();

//These routes are mounted on /api
router.use('/student', require('./student'));
router.use('/employer', require('./employer'));

// Handle 404s
router.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
