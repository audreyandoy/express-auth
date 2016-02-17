var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(ejsLayouts);

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/secret', function(req, res) {
  res.render('secret');
});

app.use('/auth', require('./controllers/auth'));





app.listen(3000);

