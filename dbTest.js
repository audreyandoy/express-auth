var db = require('./models');


//create a user
db.user.create({
	name: 'Brian',
	email: 'bhague@ga.co',
	password: 'fishtacos'
}).then(function(user) {
	console.log(user.get());
	//find a user
	db.user.findById(1).then(function(user) {
		console.log(user.get());
	});
});
