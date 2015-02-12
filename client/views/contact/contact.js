(function(){
  'use strict';

  angular.module('mean-template')
  .controller('ContactCtrl', ['$scope', function($scope){
    // I create a scope called hideContent and make it true
    $scope.hideContact = true;

// this creates a scope function that makes hideContact from true to false.
    $scope.toggleContact = function(){
      $scope.hideContact = !!!$scope.hideContact;
    };

  }]);
})();
