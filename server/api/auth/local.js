const router = require('express').Router();
const passport = require('passport');
const localStrategy = require('passport-custom').Strategy;

const { UserType, Student, Employer } = require('../../db/models');


const verifyCallback = async (request, done) => {
  try {
    const userType = request.params.type === 'student' ? Student : Employer;
    const { email, password } = request.body;
    const user = await userType.findOne({ where: { email, password } });
    user ? done(null, user) : done(null, false);
  } catch (error) {
    done(error);
  }
}

passport.use('local-strategy', new localStrategy(verifyCallback));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (id, done) => {
  try {
    const {type} = await UserType.findOne({ where: { userId: id } });
    const userType = type === 'student' ? Student : Employer;
    const user = await userType.findByPk(id);
    done(null, user)
  } catch (error) {
    done(error, false);
  }
});

router.put('/type', async (request, response, next) => {
  try {
    const {email} = request.body;
    const {type} = await UserType.findOne({ where: { email } });
    if (type) {
      response.redirect(`./login/${type}`);
    } else {
      const noUser = new Error('No user found.');
      next(noUser)
    }
  } catch (error) {
    next(error)
  }
});

router.put('/login/:type', passport.authenticate('local-strategy'), {
  successRedirect: '/welcome',
  failureRedirect: '/login'
});

