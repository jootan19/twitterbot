// timestamps
var date = new Date().getTimezoneOffset();
date = "" + new Date();
var auxCopia=date.split(" ");

date=auxCopia.slice(1,5).
             join("").
            replace(":","").
            replace(":","");

// fs
var fs = require('fs');
var sinceID = fs.readFileSync('sinceID.log', 'UTF-8'); // retrieve since_id for search params

//Twitter
var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);
var tweetCount = 0;

// Set up search parameters
var params = {
  q: '#trump',
  count: 100,
  result_type: 'recent',
  since_id: sinceID,
  lang: 'en'
};

// Initiate search using the above paramaters
T.get('search/tweets', params, function(err, data) {
  
  fs.writeFile("sinceID.log", data.search_metadata.max_id, function(err) {
    if(err) {return console.log(err);}
    console.log("sinceID saved!");
  }); 
  
  // Display search meta data
  console.log(data.search_metadata);
  
  // Open log file
  var logfname = 'logfiles/log_' + date + '.txt'; 
  var logger = fs.createWriteStream(logfname, {
    flags: 'a'
  });
  
  // Store search query
  logger.write('Search query:' + data.search_metadata.query + '\n');
  
  // Open log file for unique tweets
  var textlogfname = 'logfiles/textlog_' + date + '.txt'; 
  var textlog = fs.createWriteStream(textlogfname, {
    flags: 'a'
  });
  
  if(!err){
    // Loop through the returned tweets
    for(let i = 0; i < data.statuses.length; i++){
      
      var tweet =  String(data.statuses[i].text);
      var rtchecktext = tweet.substring(0,2);
      var logtext = '\n\n---'+ String(i) +'\nTweet: ' + tweet +   
      '\nScreenName: ' + data.statuses[i].user.screen_name +
      '\nCreated at: ' + data.statuses[i].created_at +
      '\nID: ' + data.statuses[i].id_str;
        
      if (rtchecktext !== 'RT'){
        tweetCount++;
        textlog.write(tweet + '\n');
        console.log(logtext);
      }
      
      logger.write(logtext);
    }
    
    logger.write('Unique Tweets:' + tweetCount + '\n-------------\n');
    console.log('Unique Tweets:' + tweetCount);
  } else {
    
    console.log(err);
  }
  logger.end();
  textlog.end();

});


