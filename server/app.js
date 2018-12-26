const express = require('express');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 8080;

//logging middleware
app.use(morgan('dev'));

//formats json responses for legibility
app.set('json spaces', 2);

//parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// session middleware
app.use(session({
  secret: 'get_the_money',
  resave: false,
  saveUninitialized: false
}))

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

//static middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

//api routes
app.use('/api', require('./api'));

// For all GET requests that aren't to an API route,
// we will send the index.html!
app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public'));
});

// Error handling endware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message || 'Internal server error');
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
