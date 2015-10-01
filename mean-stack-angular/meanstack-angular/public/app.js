var app = angular.module('myPractice', []);
app.controller('MainController', function ($scope) {
  $scope.submitPost = function () {
    $scope.posts.push($scope.post);
  }
})
