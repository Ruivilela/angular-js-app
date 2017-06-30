export default class CustomerListCtrl {
  constructor($scope, $location, $stateParams){
    $scope.editCustomer = (customerID) => {
      $location.url('/customer-details/' + customerID)
    }

    $scope.goNavigationData = () => {
      $location.url('/navigation-data')
    }

    $scope.$watch('customers', () => {
      this.customers = Object.assign([],$scope.$ctrl.customers )

      for(let i = 0 ; i < $scope.$ctrl.customers.length ; i++){
        let birthday = $scope.$ctrl.customers[i].birthday.split('-');

        this.customers[i].birthday =
          new Date(
            new Date() -
            new Date(birthday[0], birthday[1], birthday[2])
          ).getUTCFullYear() - 1970;
      }
    }, true)
  }
}
