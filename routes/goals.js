var goals = require('../goals.json');

exports.view = function(req, res){
	res.render('goals', goals);
};