export default class CustomerCtrl {
  constructor($scope, $stateParams, $http){
    $scope.getCustomer = () => {
      return $http.get(
        'http://localhost:8000/api/Customers/'
        + $stateParams.customerID
      )
    }
  }
}
