angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, Links) {
  // Your code here
  $scope.link = {};

  $scope.shorten = function() {
    // Link.saveLink($scope.link)
      // Do something
      console.log($scope);
      console.log($location);
      console.log(Links);
  };
});
