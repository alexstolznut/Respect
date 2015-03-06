var goals = require('../goals.json');

exports.view = function(req, res){
	var random_num = Math.random();

	if(random_num > 0.5){
	  res.render("goals", projects);
	}else{
	  res.render("goals_alternate", projects)
	}
};