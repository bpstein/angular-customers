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

    $scope.customers= [
      {
        id: 1, 
        joined: '2000-12-05', 
        name:'John', 
        city:'London', 
        orderTotal: 29.5532,
        orders: [
          {
            id: 1, 
            product: 'Shirt',
            total: 29.5532
          }
        ]
      }, 
      {
        id: 2, 
        joined: '2005-11-15',
        name:'Rahul', 
        city:'New York', 
        orderTotal: 10.109, 
        orders: [
          {
            id: 2, 
            product: 'Ball',
            total: 10.109,
          }
        ]
      }, 
      {joined: '2012-04-01',name:'Kumiko', city:'Sydney', orderTotal: 90.5858}, 
      {joined: '2007-10-17',name:'Paul', city:'Tokyo', orderTotal: 18.4422}
    ];

    init();

  };

  OrdersController.$inject = ['$scope', '$routeParams'];

  angular.module('customersApp')
    .controller('OrdersController', OrdersController);
     
}());