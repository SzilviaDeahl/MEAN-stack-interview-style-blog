var app = angular.module('myBlog', []);
app.controller('MainController', function ($scope) {
  $scope.posts = [{
    blogPost: 'szilvia',
    image: 'http://www.mikesfeedfarm.com/images/brown_horse_running.jpg'
  }],

  $scope.submitPost = function () {
    $scope.posts.push($scope.post);
  }
});
