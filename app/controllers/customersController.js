// Option 1 for Controller

app.controller('CustomersController', function($scope) {
  $scope.sortBy = 'name';
  $scope.reverse = false;
  $scope.customers= [
    {joined: '2000-12-05', name:'John', city:'London', orderTotal: 9.5532}, 
    {joined: '2005-11-15',name:'Rahul', city:'New York', orderTotal: 10.109}, 
    {joined: '2012-04-01',name:'Kumiko', city:'Sydney', orderTotal: 90.5858}, 
    {joined: '2007-10-17',name:'Paul', city:'Tokyo', orderTotal: 18.4422}
  ]
  $scope.doSort = function(propName) {
    $scope.sortBy = propName; 
    $scope.reverse = !$scope.reverse;
  };
});

