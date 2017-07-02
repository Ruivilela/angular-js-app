import CustomerCreateCtrl from '~/client/app/components/customer/customer-create/customer-create.controller.js';
import CustomerCreateModule from '~/client/app/components/customer/customer-create/index.js';

describe('Customer create', () => {
  let $scope;

  beforeEach(window.module(CustomerCreateModule));

  beforeEach(inject(($rootScope, $controller) => {
    $scope = $rootScope.$new();
    $controller(CustomerCreateCtrl, {$scope: $scope})
  }))

  describe('CustomerCreateCtrl', () => {
    it('Controller has cancelCreate as property', () => {
      expect($scope).toHaveProperties("cancelCreate");
    });

    it('Controller has createCustomer as property', () => {
      expect($scope).toHaveProperties("createCustomer");
    });
  })
})
