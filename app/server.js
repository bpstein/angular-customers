var express = require('express'), 
  app = express();

app.use(express.static(__dirname + '/'));

app.get('/customers/:id', function(req, res) {
  var customerId = parseInt(req.params.id);
  var data = {};
  for (var i=0, len=customers.length; i<len; i++) {
    if (customers[i].id === customerId) {
      data = customers[i];
      break;
    }
  }
  res.json(data);
});

app.get('/customers', function(req, res) {
  res.json(customers);
  res.json(500, {error: 'An error has occurred!'});
});

app.get('/orders', function(req, res) {
  var orders = [];
  for (var i=0, len=customers.length; i<len; i++) {
    if (customers[i].orders) {
      for (var j=0, ordersLen=customers[i].orders.length; j<ordersLen; j++) {
        orders.push(customers[i].orders[j]);
      }
    }
  }
  res.json(orders);
});

app.delete('/customers/:id', function(req, res) {
  var customerId = parseInt(req.params.id);
  var data = {status: true};
  for (var i=0, len=customers.length; i<len; i++) {
    if (customers[i].id === customerId) {
      customers.splice(i, 1);
      data = {status: true}; 
      break;
    }
  }
  res.json(data);
});

app.listen(8080);

console.log('Express listening on port 8080');

    var customers = [
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
            total: 10.109
          }
        ]
      }, 
      {
        id: 3,
        joined: '2012-04-01',
        name:'Kumiko', 
        city:'Sydney', 
        orderTotal: 90.5858,
        orders: [
          {
            id: 3,
            product: 'Boots', 
            total: 40
          }, 
          {
            id: 4,
            product: 'Socks',
            total: 10.5858
          }, 
          {
            id: 5, 
            product: 'Jersey',
            total: 40.00
          }
        ]}, 
      {
        id: 4, 
        joined: '2007-10-17',
        name:'Paul', 
        city:'Tokyo', 
        orderTotal: 18.4422, 
        orders: [
          {
            id: 6, 
            product: 'Cap',
            total: 18.4422
          }
        ]
      }
    ]; 