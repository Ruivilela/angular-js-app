import CustomerOverviewModule from '~/client/app/components/customer/customer-overview/index.js';
import CustomerOverviewCtrl from '~/client/app/components/customer/customer-overview/customer-overview.controller.js';

describe('Customer-Overview', () => {
  let $scope;

  beforeEach(window.module(CustomerOverviewModule));

  beforeEach(inject(($rootScope, $controller) => {
    $scope = $rootScope.$new();
    $controller(CustomerOverviewCtrl, {$scope: $scope})
  }))

  describe('CustomerOverviewCtrl', () => {
    it('Controller has redirectCustomerDetail as property', () => {
      expect($scope).toHaveProperties("redirectCustomerDetail");
    });
  })
})
