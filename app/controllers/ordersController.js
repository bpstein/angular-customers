(function() {

  var OrdersController = function ($scope, $routeParams) {

    var customerId = $routeParams.customerId;
    $scope.orders = null;

    function init() {
      // Search the customers for the customer id 
      for (var i=0, len=$scope.customers.length; i < len; i++) {
        if ($scope.customers[i].id === parseInt(customerId)) {
          $scope.orders = $scope.customers[i].orders;
          break;
        }
      }
    }

    init();

  };

  OrdersController.$inject = ['$scope', '$routeParams'];

  angular.module('customersApp')
    .controller('OrdersController', OrdersController);
     
}());