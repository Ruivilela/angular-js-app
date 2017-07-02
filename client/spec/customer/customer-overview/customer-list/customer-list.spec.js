import CustomerOverviewModule from '~/client/app/components/customer/customer-overview/index.js';
import CustomerListCtrl from '~/client/app/components/customer/customer-overview/customer-list/customer-list.controller.js';
import CustomerListComponent from '~/client/app/components/customer/customer-overview/customer-list/customer-list.component.js';
import CustomerListTemplate from '~/client/app/components/customer/customer-overview/customer-list/customer-list.html'

describe('Customer-Overview', () => {
  let $scope;

  beforeEach(window.module(CustomerOverviewModule));

  beforeEach(inject(($rootScope, $controller) => {
    $scope = $rootScope.$new();
    $controller(CustomerListCtrl, {$scope: $scope})
  }))

  describe('CustomerListCtrl', () => {
    it('Controller has editCustomer as property', () => {
      expect($scope).toHaveProperties("editCustomer");
    });

    it('Controller has goNavigationData as property', () => {
      expect($scope).toHaveProperties("goNavigationData");
    });

    it('Controller has filterFirstName  as property', () => {
      expect($scope).toHaveProperties("filterFirstName");
    });

    it('Controller has filterFirstName  as property', () => {
      expect($scope).toHaveProperties("filterLastName");
    });

    it('Controller has deleteCustomer  as property', () => {
      expect($scope).toHaveProperties("deleteCustomer");
    });
  })

  describe("Customer List Component", () => {
    let component = CustomerListComponent;

    it('includes the intended template',() => {
      expect(component.template).toBe(CustomerListTemplate);
    });
    
    it('invokes the right controller', () => {
        expect(component.controller).toBe(CustomerListCtrl);
    });
  })
})
