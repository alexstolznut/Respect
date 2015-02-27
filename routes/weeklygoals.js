var wgs = require('../wgs.json');

exports.view = function(req, res){
	res.render('description', wgs);
};