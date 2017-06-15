// fs
var fs = require('fs');
var sinceID = fs.readFileSync('sinceID.log', 'UTF-8'); // retrieve since_id for search params

//twitter
var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);
var tweetCount = 0;

// Set up your search parameters
var params = {
  q: '#neuroscience' + 'attention',
  count: 10,
  result_type: 'recent',
  since_id: sinceID,
  lang: 'en'
};

// Initiate your search using the above paramaters
T.get('search/tweets', params, function(err, data) {
  // If there is no error, proceed
  fs.writeFile("sinceID.log", data.search_metadata.max_id, function(err) {
    if(err) {
        return console.log(err);
      }
    console.log("since ID log was saved!");
  }); 

console.log(data.search_metadata);

var logger = fs.createWriteStream('log.txt', {
  flags: 'a'
  });
logger.write('Search query:' + data.search_metadata.query + '\n');

var textlog = fs.createWriteStream('textlog.txt', {
  flags: 'a'
  });
  
  if(!err){
    // Loop through the returned tweets
    for(let i = 0; i < data.statuses.length; i++){
      
      var tweet =  String(data.statuses[i].text);
      var rtchecktext = tweet.substring(0,2);
      if (rtchecktext !== 'RT'){
        tweetCount++;
        textlog.write(tweet + '\n');
      }
      var logtext = '\n\n---'+ String(i) +'\nTweet: ' + tweet +   
        '\nScreenName: ' + data.statuses[i].user.screen_name +
        '\nCreated at: ' + data.statuses[i].created_at +
        '\nID: ' + data.statuses[i].id_str;
      console.log(logtext);
      logger.write(logtext);
    }
    logger.write('Unique Tweets:' + tweetCount + '\n-------------\n');
    console.log('Unique Tweets:' + tweetCount);
  } else {
    console.log(err);
  }
});

logger.end();
textlog.end();
