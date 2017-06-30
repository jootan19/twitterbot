[12jun2017 - ramblingcogsbot created] 

[UPDATE 29 JUN 2017]
@ramblingcogsbot is no longer online..this repo is no longer being updated either….

Head to @VisionSciBots or @RamblingCogs for working twitter bots



——————————————

first attempt at twitter bots. #dontexpecttoomuch 

not hosted online [yet?]

code inspired by tutorials & packages here: 
https://hackernoon.com/build-a-simple-twitter-bot-with-node-js-in-just-38-lines-of-code-ed92db9eb078
https://www.npmjs.com/package/twitter
https://www.npmjs.com/package/twit

-------- CONTENTS --------

[app.js]
- searches for most 10 most recent entries of a hashtag and favourites tweets.

[crawler.js]
- crawls through max. of 100 most recent twitter statuses with query terms.
- starts crawling from tweet status ID stored in ’sinceID’ and finds unique tweets. [i.e.: RT’s ignore]. 
- Unique tweets are saved in textlog.txt. 
- All tweets and some metadata crawled from Twitter stored in log.txt

[retweet.js]
- searches for a hashtag, and retweets

[retweetuser.js]
- quotes a user's most recent tweet

[tweet.js]
- creates a tweet

[tweetimg.js]
- posts an image [GIFS/VIDEOS not supported]
- Sample image: testimg4_bw.jpg

-------- EXTRA NOTES --------

“config.js” file is also needed

// config.js
module.exports = {
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
}
