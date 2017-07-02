import CustomerCreateCtrl from './customer-create.controller';

routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
  $stateProvider
  .state('customer-create', {
    url: '/customer-create',
    template: require('./customer-create.html'),
    controller: CustomerCreateCtrl
  });
}
