const router = require('express').Router();
const { Student, Company } = require('../db/models');

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const comapanies = await Company.findAll();
    res.json(comapanies);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const company = await Company.findById(id);
    res.json(company);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const company = await Company.create(req.body);
    res.json(company);
  } catch (err) {
    next(err);
  }
});

//idk if i can just pass in req.body to update or if we need to specify
router.put('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    Company.update(req.body, {
      where: { id: id },
      returning: true,
      plain: true
    });
    const updatedCompany = await Company.findById(id);
    res.json(updatedCompany);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const company = await Company.findById(id);
    Company.destroy({
      where: {
        id: id
      }
    });
    res.json(company);
  } catch (err) {
    next(err);
  }
});
