import NavigationDataCtrl from './navigation-data.controller.js'

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
  .state('navigation-data', {
    url: '/navigation-data/{customerID}',
    controller: NavigationDataCtrl,
    template: require('./navigation-data.html')
  });
}
