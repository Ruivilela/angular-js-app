import CustomerCtrl from './customer.controller';

routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
  .state('customer', {
    url: '/customer-details/{customerID}',
    template: require('./customer.html'),
    controller: CustomerCtrl
  });
}
