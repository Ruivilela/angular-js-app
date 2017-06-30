export default class CustomerDetailsCtrl {
  constructor($scope, $location, $stateParams, $http){

    fetch('http://localhost:8000/api/Customers/'
    + $stateParams.customerID)
    .then((result) => {
      return result.json()
    })
    .then((json) => {
      $scope.customer = json
      $scope.$apply()
    })

    $scope.saveDetails = () => {
      $location.url('/');
    }

    $scope.cancelDetails = () => {
      $location.url('/');
    }
  }
}
