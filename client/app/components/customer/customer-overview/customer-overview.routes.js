routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
  .state('customer-overview', {
    url: '/',
    template: require('./customer-overview.html'),
    resolve: {
      customers: ['CustomerService', (CustomerService) => {
        return CustomerService.getCustomer()
      }]
    }
  });
}
