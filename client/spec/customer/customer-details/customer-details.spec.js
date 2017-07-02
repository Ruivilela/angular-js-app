import CustomerDetailsCtrl from '~/client/app/components/customer/customer-details/customer-details.controller.js';
import CustomerModule from '~/client/app/components/customer/index.js';
import CustomerDetailsComponent from '~/client/app/components/customer/customer-details/customer-details.component.js';
import CustomerDetailsTemplate from '~/client/app/components/customer/customer-details/customer-details.html';

describe('Customer Details', () => {
  let $scope;

  beforeEach(window.module(CustomerModule));

  beforeEach(inject(($rootScope, $controller) => {
    $scope = $rootScope.$new();
    $controller(CustomerDetailsCtrl, {$scope: $scope})
  }))

  describe('CustomerDetailsCtrl', () => {
    it('Controller has saveDetails as property', () => {
      expect($scope).toHaveProperties("saveDetails");
    });

    it('Controller has cancelDetails as property', () => {
      expect($scope).toHaveProperties("cancelDetails");
    });
  })

  describe('Component - Customer Details', () => {
    let component = CustomerDetailsComponent;

    it('includes the intended template',() => {
      expect(component.template).toBe(CustomerDetailsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toBe(CustomerDetailsCtrl);
    });
  })
})
