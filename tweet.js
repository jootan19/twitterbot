var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);


//  tweet 'hello world!' 
// 
T.post('statuses/update', { status: 'Bot says: test tweet' }, function(err, data, response) {
  console.log(data.text)
})


