import CustomerOverviewModule from '~/client/app/components/customer/customer-overview/index.js';
import CustomerListCtrl from '~/client/app/components/customer/customer-overview/customer-list/customer-list.controller.js';

describe('Customer-Overview', () => {
  let $scope;

  beforeEach(window.module(CustomerOverviewModule));

  beforeEach(inject(($rootScope, $controller) => {
    $scope = $rootScope.$new();
    $controller(CustomerListCtrl, {$scope: $scope})
  }))

  // controller spec to see if the properties are being instanciated
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
