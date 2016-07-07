angular.module('tweetr')
.controller('TweetController', ['$scope', 'TweetService', '$http', function TweetController($scope, TweetService, $http){
  $scope.tweets = [];
  TweetService.getTweetsFromServer()
  .then(function(tweets){
    $scope.tweets = tweets;
    $scope.$apply();
  });

  // http.get('/tweets')
  // .then(function(res){
  //   console.log('got res', res);
  //   return $scope.tweets = res.data;
  // });

  $scope.addTweet = function(tweet) {
    TweetService.postTweetToServer(tweet)
    .then(function(tweet) {
      $scope.tweets.push(tweet);
      $scope.$apply();
    });
    $scope.tweet.text = '';
  };
}]);
