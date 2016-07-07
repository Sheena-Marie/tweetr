angular.module('tweetr')
.service('TweetService', ['$http', function($http){

  var _tweets = [{text: 'Chirping not allowed'}];

  this.getTweetsFromServer = function(){
    return new Promise(function(resolve, reject){
    $http.get('/tweets')
    .then(function(res) {
      console.log('got res', res);
      return resolve(res.data);
    });
  });
};

this.postTweetToServer = function(tweet){
  return new Promise(function(resolve, reject){
    $http.post('/tweets', {tweet: tweet})
    .then(function(res){
      console.log('we posted han solo on instagram');
      return resolve(res.data);
    });
  });
};

  window.TweetService = this;
  // getTweetsFromServer();

  this.getTweets = function() {
    return _tweets;
  };

  this.addTweet = function(text){
    _tweets.push({text: text});
  };

  return this;
}]);
