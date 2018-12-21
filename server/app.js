const express = require('express');
const path = require('path');
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
