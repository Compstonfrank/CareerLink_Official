const router = require('express').Router();

//routes go here...
//example      router.use('/students', require('./students'));

// Handle 404s
router.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = router;
