var axios = require('axios');

// Move these to environment variables
var id = "YOUR_CLIENT_ID";
var sec = "SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username){
  return axios.get('https://api.github.com/users/' + username);
}

var helpers = {
  getPlayersInfo: function (players) {
    // Fetch data from github
    return axios.all(players.map(function(username){
      return getUserInfo(username);
    })).then(function(info){
      return info.map(function(user){
        return user.data;
      })
    }).catch(function(err){
      console.warn("Error in getPlayersInfo", err);
    })
  }
};

module.exports = helpers;
