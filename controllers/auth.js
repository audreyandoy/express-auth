var express = require('express');
var db = require('../models');
var router = express.Router();

router.get('/signup', function(req, res) {
  res.render('auth/signup');
});

router.post('/signup', function(req, res) {
	var name = req.body.name;
	var email = req.body.email;
	var password = req.body.password;
	db.user.findOrCreate({
		where: {			//find where = find record of email, if it doesn't
			email: email	//exist then create a new record with name and pw
		},	
		defaults: {
			name: name,
			password: password
		}
	}).spread(function(user, created) {  //created is a boolean
		if (created) {
			res.redirect('/');
		} else {
			res.send('User already exists');
		}
	 }).catch(function(err) {
	 	res.send("OMGWTF"+err);
	 });
   });

router.get('/login', function(req, res) {
  res.render('auth/login');
});

router.post('/login', function(req, res) {
  res.send(req.body);
});


module.exports = router;
