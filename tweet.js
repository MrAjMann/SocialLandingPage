var Twit = require('twit');
const ENV = require('dotenv');
ENV.config();

var T = new Twit({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret
});

// T.post(
//   'statuses/update',
//   { status: 'hello world! This is sent using the twitter API' },
//   function(err, data, response) {
//     console.log(data);
//   }
// );

var stream = T.stream('statuses/filter', { track: 'Javascript' });

stream.on('tweet', function(tweet) {
  console.log(tweet);
});
