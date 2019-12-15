require('dotenv').config();
const twitter = require('twitter');

const twitterClient = new twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

exports.handler = (event, context, callback) => {
  const tweet = '【訃報】伊藤将史 死去\n今後予定されている飲み会やイベントには参加できなくなってしまいました…\n急に連絡なく来なくてもドタキャンではありません！\n本当に今までありがとうございました！\n\nこれは自動ツイートのため返信できません';
  twitterClient.post('statuses/update', { status: tweet },
    function(error, tweet, response) {
      if(error) {
        callback(null, 'error!');
      }
      callback(null, 'done!');
  });
};