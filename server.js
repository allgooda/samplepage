var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var bodyParser   = require('body-parser');
var debug        = require('debug')('app:http');
var cookieParser = require('cookie-parser');

require('dotenv').load();
var env      = require('./api/config/environment'),
    mongoose = require('./api/config/database'),
    routes   = require('./api/routes/api');

var app = express();
app.set('view engine', 'jade');

app.set('title', env.TITLE);
app.set('safe-title', env.SAFE_TITLE);
app.set('secret-key', env.SECRET_KEY);

app.locals.title = app.get('title');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin',  '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  if ('OPTIONS' == req.method) {
    res.send(200);
  } else {
    next();
  }
});

// Logging layer.
app.use(logger('dev'));
// Helper layer (parses the requests, and adds further data).
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser('notsosecretnowareyou'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(debugReq);

function debugReq(req, res, next) {
  debug('params:', req.params);
  debug('query:',  req.query);
  debug('body:',   req.body);
  next();
}

app.use('/', routes);

module.exports = app;
