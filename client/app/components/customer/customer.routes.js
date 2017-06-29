routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
  .state('customer', {
    url: '/',
    template: require('./customer.html')
  });
}
