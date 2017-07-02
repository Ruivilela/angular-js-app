import CustomerDetailsCtrl from '~/client/app/components/customer/customer-details/customer-details.controller.js';
import CustomerModule from '~/client/app/components/customer/index.js';


describe('Customer-Overview', () => {
  let $scope;

  beforeEach(window.module(CustomerModule));

  beforeEach(inject(($rootScope, $controller) => {
    $scope = $rootScope.$new();
    $controller(CustomerDetailsCtrl, {$scope: $scope})
  }))

  it('Controller has saveDetails as property', () => {
    expect($scope).toHaveProperties("saveDetails");
  });

  it('Controller has cancelDetails as property', () => {
    expect($scope).toHaveProperties("cancelDetails");
  });
})
