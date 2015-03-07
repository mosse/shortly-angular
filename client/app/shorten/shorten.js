angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

    $scope.shorten = function() {
      Link.saveLink($scope.link)
        // Do something
    };
});
