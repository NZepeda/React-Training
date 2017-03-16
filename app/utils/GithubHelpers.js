var axios = require('axios');

// Move these to environment variables
var id = "YOUR_CLIENT_ID";
var sec = "SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username){
  console.log("Calling: " + username);
  return axios.get('https://api.github.com/users/' + username);
}

function getRepos(username){
  // fetch username repos
}

function getTotalStars(star){
  // calculate all the stars that the user has
}

function getPlayersData(player){
  // get Repos
  // getTotalStars
  // return object with that data
}

function calculateScores(players){
  // return an array after doing some fancy algorithms a winner
}



var helpers = {
  getPlayersInfo: function (players) {
    // Fetch data from github
    return axios.all(players.map(function(username){
      return getUserInfo(username);
    })).then(function(info){
      return info.map(function(user){
        console.log("Return user data: " + user.data);
        return user.data;
      })
    }).catch(function(err){
      console.warn("Error in getPlayersInfo", err);
    })
  },
  battle: function(){

  }
};

module.exports = helpers;
