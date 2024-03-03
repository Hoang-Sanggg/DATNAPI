var createError = require('http-errors');
const cors = require('cors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const apiRouter = require('./routes/api');
const postnewsRouter = require('./routes/PostnewsApi.js');
const NotificationRouter = require('./routes/NotificationAPI');
const BrandRouter = require('./routes/BrandApi');
const categoryRouter = require('./routes/CategoryApi.js');
const InforRouter = require('./routes/InforAPI');
const messageRouter = require('./routes/messageApi.js');
const uploadImageRouter = require('./routes/upload.js');
const savedRouter = require('./routes/savedApi.js')

var app = express();
app.use(cors()); // Kích hoạt CORS cho tất cả các yêu cầu
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

require('./config/DBConnection')
require('./config/connectionSocket.io.js')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/public", express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

//tạo đường dẫn tới file trong router
app.use('/api', apiRouter);
app.use('/api/Notification', NotificationRouter)
app.use('/api/postnews', postnewsRouter);
app.use('/api/brands', BrandRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/infors', InforRouter);
app.use('/api/message', messageRouter);
app.use('/api/upload', uploadImageRouter);
app.use('/api/saved', savedRouter);


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
