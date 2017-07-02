import CustomerModule from '~/client/app/components/customer/index.js';
import CustomerCtrl from '~/client/app/components/customer/customer.controller.js';

describe('Customers', () => {
  let $scope;

  beforeEach(window.module("MyApp.customer"));

  beforeEach(inject(($rootScope, $controller) => {
    $scope = $rootScope.$new();
    $controller(CustomerCtrl, {$scope: $scope})
  }))

  describe('Customer controller', () => {
    it('Controller has getCustomer as property', () => {
      expect($scope).toHaveProperties("getCustomer");
    });

    it('getCustomer returns a Promise', () => {
      expect($scope.getCustomer().then).not.toBeUndefined();
    });
  })

})
