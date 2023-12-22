var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const testRouter = require('./routes/api');
const productRouter = require('./routes/ProductApi');
const DetailRouter = require('./routes/DetailAPI');
const ChitietGiaoDichRouter = require('./routes/ChitietGiaoDichAPI');
const NotificationRouter = require('./routes/NotificationAPI.js');


var app = express();

require('./config/DBConnection')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//tạo đường dẫn tới file trong router
app.use('/api', testRouter);
app.use('/api/products', productRouter)
app.use('/api/detail', DetailRouter)
app.use('/api/ChitietGiaoDich', ChitietGiaoDichRouter)
app.use('/api/Notification', NotificationRouter)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
