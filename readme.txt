[12jun2017 - ramblingcogsbot created] 

first attempt at twitter bots. #dontexpecttoomuch 

exists at twitter handle: @ramblingcogs

not hosted online [yet?]

code inspired by tutorials & packages here: 
https://hackernoon.com/build-a-simple-twitter-bot-with-node-js-in-just-38-lines-of-code-ed92db9eb078
https://www.npmjs.com/package/twitter
https://www.npmjs.com/package/twit

-------- CONTENTS --------

[app.js]
- searches for most 10 most recent entries of a hashtag and favourites tweets.

[retweet.js]
- searches for a hashtag, and retweets

[retweetuser.js]
- quotes a user's most recent tweet

[tweet.js]
- creates a tweet

-------- EXTRA NOTES --------

“config.js” file is also needed

// config.js
module.exports = {
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
}