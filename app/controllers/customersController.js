// Option 1 => uses global variable

// app.controller('CustomersController', function($scope) {
//   $scope.sortBy = 'name';
//   $scope.reverse = false;
//   $scope.customers= [
//     {joined: '2000-12-05', name:'John', city:'London', orderTotal: 9.5532}, 
//     {joined: '2005-11-15',name:'Rahul', city:'New York', orderTotal: 10.109}, 
//     {joined: '2012-04-01',name:'Kumiko', city:'Sydney', orderTotal: 90.5858}, 
//     {joined: '2007-10-17',name:'Paul', city:'Tokyo', orderTotal: 18.4422}
//   ]
//   $scope.doSort = function(propName) {
//     $scope.sortBy = propName; 
//     $scope.reverse = !$scope.reverse;
//   };
// });

// Option 2 => eliminates global variable

// (function() {
//   angular.module('customersApp')
//     .controller('CustomersController', function($scope) {
//       $scope.sortBy = 'name';
//       $scope.reverse = false;
//       $scope.customers= [
//         {joined: '2000-12-05', name:'John', city:'London', orderTotal: 9.5532}, 
//         {joined: '2005-11-15',name:'Rahul', city:'New York', orderTotal: 10.109}, 
//         {joined: '2012-04-01',name:'Kumiko', city:'Sydney', orderTotal: 90.5858}, 
//         {joined: '2007-10-17',name:'Paul', city:'Tokyo', orderTotal: 18.4422}
//       ]
//       $scope.doSort = function(propName) {
//         $scope.sortBy = propName; 
//         $scope.reverse = !$scope.reverse;
//       };
//   });
// }());


// Option 3 => 

(function() {

  var CustomersController = function ($scope, customersFactory, appSettings) {
    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.customers = [];
    $scope.appSettings = appSettings;

    function init() {
      customersFactory.getCustomers()
        .success(function(customers) {
          $scope.customers = customers;
        })
        .error(function(data, status, headers, config) {
          // handle error
        });
    }

    init();

    $scope.doSort = function(propName) {
      $scope.sortBy = propName; 
      $scope.reverse = !$scope.reverse;
    };
  };

  CustomersController.$inject = ['$scope', 'customersFactory', 'appSettings'];

  angular.module('customersApp')
    .controller('CustomersController', CustomersController);
     
}());