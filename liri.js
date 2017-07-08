// create pkg(dot)json
//npm .init
//all packages needed at npm  npm install
//--save saves for me and json file
// create all files needed
//gitignore before push to respository - 
  //key.js don't want public
  //node modules
  //.DS_Store (on Mac only) include anyway

  //set up Twitter keys
  //install npm pkgs 

  //Require keys

  var keys = require('./keys.js');
  var Twitter = require('twitter');
  var Spotify = require('node-spotify-api');
  
  var getMyTweets = function (){
    var client = new Twitter(keys.twitterKeys);
    var params = {screen_name: "susanchiemi"};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error){
         // console.log(tweets);
         for(var i=0; i<tweets.length; i++) {
             console.log(tweets[i].created_at);
             console.log (' ');
             console.log (tweets[i].text);
        }
      }

});
}
//var spotifyThisSong = function(){
//var clientTwo = new Spotify(keys.spotifyKeys);

var getMeSpotify = function(songName){
var spotify = new Spotify(keys.spotifyKeys);
spotify.search({ type: 'track', query: songName }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data.tracks.items[0]); 
});
}
 









var pick = function(caseData, functionData) {
    switch(caseData) {
        case 'my-tweets':
        getMyTweets();
        break;
        case 'spotify-this-song':
        getMeSpotify (functionData);
        break;
        default:
        console.log('LIRI does not know that');
    }
}

var runThis = function (argOne, argTwo) {
    pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);

