angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  $scope.getLinks = function() {
    Links.getLinks()
    .then(function(resp){
      $scope.data.links = Links.returnArray();
    })
    // .then(function(err, resp){
    //   return resp;
    //   console.log('links.js', resp);
    // })
    // .catch(function(error){
    //   console.error(error);
    // })
  }

  $scope.getLinks();
});
