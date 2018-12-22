const router = require('express').Router();
const { Student, Employer } = require('../db/models');

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const student = await Student.findByPk(id);
    res.json(student);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const student = await Student.create(req.body);
    res.json(student);
  } catch (err) {
    next(err);
  }
});

//idk if i can just pass in req.body to update or if we need to specify
router.put('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    Student.update(req.body, {
      where: { id: id },
      returning: true,
      plain: true
    });
    const updatedStudent = await Student.findById(id);
    res.json(updatedStudent);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const student = await Student.findById(id);
    Student.destroy({
      where: {
        id: id
      }
    });
    res.json(student);
  } catch (err) {
    next(err);
  }
});
