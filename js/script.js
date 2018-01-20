// Creates the module.
var module = angular.module('mainApp', ['ngRoute', 'ngAnimate']);

// Configures the routes.
module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', { // Route for the home page.
    templateUrl : 'about.html',
    controller  : 'aboutController'
  }).when('/about', { // Route for the about page.
    templateUrl : 'about.html',
    controller  : 'aboutController'
  }).when('/servers', { // Route for the servers page.
    templateUrl : 'servers.html',
    controller  : 'serversController'
  }).when('/contact', { // Route for the contact page.
    templateUrl : 'contact.html',
    controller  : 'contactController'
  }).otherwise({
    redirectTo: '/'
  });
}]);

// Sets the controllers.
module.controller('aboutController', function($scope, $routeParams) {
  $scope.param = $routeParams.param;
  $scope.pageClass = 'page-about';
  loadStyles();
});

module.controller('serversController', function($scope, $routeParams) {
  $scope.param = $routeParams.param;
  $scope.pageClass = 'servers-projects';
  loadStyles();
});

module.controller('contactController', function($scope, $routeParams) {
  $scope.param = $routeParams.param;
  $scope.pageClass = 'page-contact';
  loadStyles();
});
