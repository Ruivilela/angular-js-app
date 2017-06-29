routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
  .state('navigation-data', {
    url: '/navigation-data',
    template: require('./navigation-data.html')
  });
}
