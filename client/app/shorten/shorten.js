angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, Links, $location) {
  // Your code here
  $scope.link = {};

  $scope.shorten = function() {
    Links.saveLink($scope.link)
      .then(function(){
        console.log("ng module says: link shortened")
      })
      .catch(function (error) {
        console.error(error);
      })
  };
});
