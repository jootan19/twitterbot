var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

var options = { screen_name: 'realdonaldtrump',
                count:10 };
                
                
T.get('statuses/user_timeline',options, function(err,data) {
  if(!err){
    for (var i = 0; i < data.length ; i++){
      //console.log(data[i].text)
      console.log(data[i].retweeted_status)
      //console.log(data[i].id_str);
      //var retweetbody = 'RT botmaster @gnafuy: twitter.com/gnafuy/statuses/' + data[i].id_str
      //console.log(retweetbody)
      //T.post('statuses/update',{status:retweetbody},function(err,data){console.log(data.text)});
    }
  } else {
    console.log(err);
  }
});

 