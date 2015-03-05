var goals = require('../goals.json');

exports.view = function(req, res){
	var random_num = Math.random();

  // if(random_num > 0.5){
    res.render("goals", goals);
  // }else{
    // res.render("goals_alternate", goals)
  // }
};

exports.getJSON = function(req, res) {
	console.log("getJSON Called...")
	console.log(goals);
  	res.json(goals['ltg']);
}

exports.getObj = function(req, res) {
	console.log("getObj Called...")
	var goalID = req.params.id;
	console.log("goalID: " + goalID)
	console.log(goals);
	var goal = goals['ltg'][goalID];
  	res.json(goal);
}