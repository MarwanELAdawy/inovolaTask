var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var productRouter = require('./routes/product');
var usersRouter = require('./routes/users');

var app = express();

require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/meantask', {

   promiseLibrary: require("bluebird"),
   useNewUrlParser: true, 
   useUnifiedTopology: true, 
   useCreateIndex: true
  }).then(() => {
        console.log('Connection Successful');
    }).catch((err) => {
        console.error(err);
    });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/product', productRouter);
app.use('/users', usersRouter);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
      'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
      'Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

// catch 404 and forward to error handler
app.use((req, res, next)=>{
  next(createError(404));
});

// error handler
app.use((err, req, res, next)=>{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
