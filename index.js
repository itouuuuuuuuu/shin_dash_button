require('dotenv').config();
const twitter = require('twitter');

const twitterClient = new twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

exports.handler = (event, context, callback) => {
  const tweet = 'test\ntweet';
  twitterClient.post('statuses/update', { status: tweet },
    function(error, tweet, response) {
      if(error) {
        callback(null, 'error!');
      }
      callback(null, 'done!');
  });
};