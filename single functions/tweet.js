var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);


//  tweet 'hello world!' 
// 
T.post('statuses/update', { status: 'Hello Vison Sci community! Use #VisionScience to get a RT shoutout here! Or #VisionScienceJobs if you are looking to hire!' }, function(err, data, response) {
  console.log(data.text);
})


