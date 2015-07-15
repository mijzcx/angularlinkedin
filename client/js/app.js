// MODULE HERE
var linkedInLoginApp = angular.module('linkedInLoginApp', []);

linkedInLoginApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.
      when('/login', {
        templateUrl: 'tpl/login.html'
      }).
      when('/main', {
        templateUrl: 'tpl/main.html',
        controller: 'linkedInLoginCtrl'
      }).
      otherwise({
        redirectTo: '/login'
      });
  }

]);





