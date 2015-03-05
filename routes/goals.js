var goals = require('../goals.json');

exports.view = function(req, res){
	var random_num = Math.random();

  if(random_num > 0.5){
    res.json("goals", goals);
  }else{
    res.json("goals_alternate", goals)
  }
};