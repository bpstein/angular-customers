// (function() {
//   var customersService = function() {
//     var customers = [
//       {
//         id: 1, 
//         joined: '2000-12-05', 
//         name:'John', 
//         city:'London', 
//         orderTotal: 29.5532,
//         orders: [
//           {
//             id: 1, 
//             product: 'Shirt',
//             total: 29.5532
//           }
//         ]
//       }, 
//       {
//         id: 2, 
//         joined: '2005-11-15',
//         name:'Rahul', 
//         city:'New York', 
//         orderTotal: 10.109, 
//         orders: [
//           {
//             id: 2, 
//             product: 'Ball',
//             total: 10.109
//           }
//         ]
//       }, 
//       {
//         id: 3,
//         joined: '2012-04-01',
//         name:'Kumiko', 
//         city:'Sydney', 
//         orderTotal: 90.5858,
//         orders: [
//           {
//             id: 3,
//             product: 'Boots', 
//             total: 40
//           }, 
//           {
//             id: 4,
//             product: 'Socks',
//             total: 10.5858
//           }, 
//           {
//             id: 5, 
//             product: 'Jersey',
//             total: 40.00
//           }
//         ]}, 
//       {
//         id: 4, 
//         joined: '2007-10-17',
//         name:'Paul', 
//         city:'Tokyo', 
//         orderTotal: 18.4422, 
//         orders: [
//           {
//             id: 6, 
//             product: 'Cap',
//             total: 18.4422
//           }
//         ]
//       }
//     ]; 

//     this.getCustomers = function() {
//       return customers;
//     };

//     this.getCustomer = function(customerId) {
//       for (var i=0, len=customers.length; i < len; i++) {
//         if (customers[i].id === parseInt(customerId)) {
//           return customers[i];
//         }
//       }
//       return {};
//     }

//   };

//   angular.module('customersApp').service('customersService', customersService);

// }());