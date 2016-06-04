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

  var CustomersController = function ($scope, $log, customersFactory, appSettings) {
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
          $log.log(data.error + ' ' + status);
        });
    }

    init();

    $scope.doSort = function(propName) {
      $scope.sortBy = propName; 
      $scope.reverse = !$scope.reverse;
    };

    $scope.deleteCustomer = function(customerId) {
      customersFactory.deleteCustomer(customerId)
        .success(function(status) {
          if (status) {
            for (var i=0, len=$scope.customers.length; i<len; i++) {
              if ($scope.customers[i].id === customerId) {
                $scope.customers.splice(i, 1);
                break;
              }
            }
          } else {
            $window.alert('Unable to delete customer');
          }
        })
        .error(function(data, status, headers, config) {
          // handle error
        });
    }
  };

  CustomersController.$inject = ['$scope', '$log', 'customersFactory', 'appSettings'];

  angular.module('customersApp')
    .controller('CustomersController', CustomersController);
     
}());