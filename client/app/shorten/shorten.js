angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, Links, $location) {
  // Your code here
  $scope.link = {};
  $scope.loading = false;

  $scope.addLink = function() {
    $scope.loading = true;
    Links.saveLink($scope.link)
      .then(function(){
        console.log("ng module says: link shortened");
        $scope.loading = false;
        // $location.path('/');
      })
      .catch(function (error) {
        console.error(error);
      })
  };
});
