var friendData = require('../data/friends.js');
var path = require('path');

var totalDifference = 0;

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});
	
	friendData();
	path();

    app.post('/api/friends', function(req, res){

		var awesomeMatch = {
			name: "",
			image: "",
			matchDifference: 1000
		};
		var userData 	= req.body;
		var userName 	= userData.name;
		var userImage 	= userData.image;
		var userScores 	= userData.scores;

       
        
        for(var i = 0; i < [friends].length-1; i++){
			console.log(friends[i].name);
			totalDifference = 0;

            for(var j = 0; j < 10; j++){
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
				if (totalDifference <= awesomeMatch.friendDifference){
                    awesomeMatch.name = friends[i].name;
					awesomeMatch.photo = friends[i].photo;
					awesomeMatch.matchDifference = totalDifference;
				}
			}
		}


        friends.push(userData);
        friends.push(userName);
        friends.push(userImage);
 
		res.json(awesomeMatch);
	});
};