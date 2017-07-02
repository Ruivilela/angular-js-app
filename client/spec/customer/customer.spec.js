require('to-have-property')

import angular from 'angular';
import mocks from 'angular-mocks';

import CustomerModule from './../../app/components/customer/index.js';
import CustomerCtrl from './../../app/components/customer/customer.controller.js';

describe('Customers', () => {
  let $scope;

  beforeEach(angular.mock.module("MyApp.customer"));

  beforeEach(inject(($rootScope, $controller) => {
    $scope = $rootScope.$new();
    $controller(CustomerCtrl, {$scope: $scope})
  }))

  it('After Controller created, getCustomer props exists', () => {
    expect($scope).toHaveProperties("getCustomer");
  });

  it('getCustomer returns a Promise', () => {
    expect($scope.getCustomer().then).not.toBeUndefined();
  });
})
