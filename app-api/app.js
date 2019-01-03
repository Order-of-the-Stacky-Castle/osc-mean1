var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Added requires
var mongoose = require('mongoose');
const mlab = `mongodb://stackyblocks:stackyblocks1@ds149034.mlab.com:49034/stackymadlib`;
var bluebird = require('bluebird');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var api = require('./routes/api.route');

var app = express();

// CORS Usage
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api', api);

//  ADDED CODE
//  Test mongoose connection
mongoose.connect(
  process.env.MONGODB_URI || mlab,
  { useNewUrlParser: true }
)
  .then(() => {
    console.log(
      `Successfully Connected to the Mongodb Database `
    );
  })
  .catch(() => {
    console.log(
      'Error connecting to the Mongodb Database'
    );
  });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.body.textContent = err.message;
  res.render('error');
});

module.exports = app;
