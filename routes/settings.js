var friends = require('../friends.json');

exports.view = function(req, res){
	
	res.render('settings', friends);
};

