import CustomerOverviewCtrl from './customer-overview.controller.js';

routes.$inject = ['$stateProvider'];
export default function routes($stateProvider, $stateParams) {
  $stateProvider
  .state('customer-overview', {
    url: '/',
    template: require('./customer-overview.html'),
    controller: CustomerOverviewCtrl,
    resolve: {
      customers: ['CustomerService', (CustomerService) => {
        return CustomerService.getCustomer()
      }]
    }
  });
}
