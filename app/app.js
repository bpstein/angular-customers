(function(){
  var app = angular.module('customersApp', ['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'CustomersController',
        templateUrl: 'views/customers.html'
      })

      .when('/orders/:customerId', {
        controller: 'OrdersController',
        templateUrl: 'views/orders.html'
      })

      .when('/orders', {
        controller: 'AllOrdersController', 
        templateUrl: 'views/allorders.html'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
}());