const router = require('express').Router();
const { Student, Employer } = require('../db/models');

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const employers = await Employer.findAll();
    res.json(employers);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const employer = await Employer.findById(id);
    res.json(employer);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const employer = await Employer.create(req.body);
    res.json(employer);
  } catch (err) {
    next(err);
  }
});

//idk if i can just pass in req.body to update or if we need to specify
router.put('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    Employer.update(req.body, {
      where: { id: id },
      returning: true,
      plain: true
    });
    const updateEmployer = await Employer.findById(id);
    res.json(updateEmployer);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const employer = await Employer.findById(id);
    Employer.destroy({
      where: {
        id: id
      }
    });
    res.json(employer);
  } catch (err) {
    next(err);
  }
});
