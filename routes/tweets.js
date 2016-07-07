/* jshint esversion:6 */

const express = require('express');
const router = express.Router();
const Tweet = require('../models/tweet');
const filter = require('../lib/model_filter');


router.get('/', function(req, res, next) {
  console.log('got tweets');
  Tweet.find(function(err, tweets){
    if (err) return res.json({error: err});
    const filteredTweets = tweets.map((tweet) => {
      return filter(tweet, ['text', 'createdAt']);
    });
    res.json(filteredTweets);
  });
});

router.post('/', function(req, res, next) {
  console.log('posted', req.body);
    const tweet = new Tweet({
      text: req.body.tweet,
      createdAt: new Date()
    });
    console.log('HEEEEEEEELP!!!');

    tweet.save(function(err, tweet){
    if (err) return res.send({error: 'ERROR!!' + err});
    res.json(filter(tweet, ['text', 'createdAt']));
  });



  // Tweet.create(req.body);

});

module.exports = router;
