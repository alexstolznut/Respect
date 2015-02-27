var ltg = require('../goals.json');

exports.view = function(req, res){
	res.render('manage', ltg);
};