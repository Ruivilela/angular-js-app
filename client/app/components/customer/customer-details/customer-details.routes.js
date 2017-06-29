import CustomerDetailsCtrl from './customer-details.controller';

routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
  .state('customer-details', {
    url: '/customer-details',
    controller: CustomerDetailsCtrl,
    template: require('./customer-details.html')
  });
}
