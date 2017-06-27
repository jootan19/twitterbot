var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);


var fs = require('fs');
var sinceID_news = fs.readFileSync('sinceID_news.log', 'UTF-8'); // retrieve since_id for search params
var sinceID_jobs = fs.readFileSync('sinceID_jobs.log', 'UTF-8'); // retrieve since_id for search params

// Set up your search parameters
var params1 = {
  q: '#visionscience',
  count: 1,
  result_type: 'recent',
  since_id: sinceID_news,
  lang: 'en'
};


var params2 = {
  q: '#visionsciencejobs',
  count: 1,
  result_type: 'recent',
  since_id: sinceID_jobs,
  lang: 'en'
};


T.get('search/tweets', params1, function(err, data, response) {
  if(!err){
    //fs.writeFile("sinceID_news.log", data.search_metadata.max_id, function(err) {
        //if(err) {return console.log(err);}
        //console.log("sinceID saved!");
    //}); 
     for(let i = 0; i < data.statuses.length; i++){
       if(data.statuses[i].in_reply_to_status_id === null){
         var retweetbody = 'RT latest Vision Science news: twitter.com/anyuser/statuses/' + data.statuses[i].id_str
         console.log(retweetbody)
       //T.post('statuses/update',{status:retweetbody},function(err,data){console.log(data.text)});
       //T.post('favorites/create', data.statuses[i].id_str, function(err, response){});
       }}
    
  }else{  
    console.log(err);
    
  }
});

T.get('search/tweets', params2, function(err, data, response) {
  if(!err){
     for(let i = 0; i < data.statuses.length; i++){
       if(data.statuses[i].in_reply_to_status_id === null){
         var retweetbody = 'RT latest Vision Science Jobs: twitter.com/anyuser/statuses/' + data.statuses[i].id_str;
         //T.post('statuses/update',{status:retweetbody},function(err,data){console.log(data.text)});
         //T.post('favorites/create', data.statuses[i].id_str, function(err, response){});
       }
       
     }
  }else{  
    console.log(err);
  }
});