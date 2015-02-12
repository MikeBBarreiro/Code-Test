(function(){
  'use strict';

// Here are the angular routes

  angular.module('mean-template', ['ngRoute', 'LocalForageModule'])
  .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/contact', {templateUrl:'/views/contact/contact.html', controller:'ContactCtrl'})
// If user gets 400 or the other routes dont run the user is redirected to the home page here
    .otherwise({redirectTo:'/'});

  }]);
})();
