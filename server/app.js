const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const app = express();

const mailer = require('./api/mailer')


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.set('port', (process.env.PORT || 4000));
app.get('/', function(request, response) {
  var result = 'App is running'
  response.send(result);
}).listen(app.get('port'), function() {
  console.log('App is running, server is listening on port ', app.get('port'));
});

app.use('/api/mailer', mailer)
app.get('/', function(req, res){
  res.redirect('/api/mailer', mailer);
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
  res.render('error');
});

module.exports = app;
