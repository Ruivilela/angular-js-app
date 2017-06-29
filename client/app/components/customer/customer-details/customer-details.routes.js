routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
  .state('customer-details', {
    url: '/customer-details',
    template: require('./customer-details.html')
  });
}
