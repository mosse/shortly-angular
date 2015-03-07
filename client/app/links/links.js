angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {};

  $scope.getLinks = function() {
    Links.getLinks()
    .then(function(resp){
      console.log("response: ",resp);
      $scope.data.links = Links.returnArray();
    })
    .catch(function(error){
      console.error(error);
    })
  }

  $scope.getLinks();
});
