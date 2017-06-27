var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

var img = require('fs').readFileSync('testimg4_bw.jpg');

T.post('media/upload', {media: img}, function(error, media, response) {

  if (!error) {

    // If successful, a media object will be returned.
    console.log(media);

    // Lets tweet it
    var status = {
      status: 'Testing image posting. Guess the image!',
      media_ids: media.media_id_string // Pass the media id string
    };

    T.post('statuses/update', status, function(error, tweet, response) {
      if (!error) {
        console.log(tweet);
      }
    });

  }
});