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

    $scope.saveDetails = (
        firstName,
        lastName,
        birthday,
        gender,
        lastContacted,
        value
    ) => {
      if(firstName) $scope.customer.firstName = firstName;
      if(lastName) $scope.customer.lastName = lastName;
      if(birthday) $scope.customer.birthday = birthday;
      if(gender) $scope.customer.gender = gender;
      if(lastContacted) $scope.customer.lastContacted = lastContacted;
      if(value) $scope.customer.value= value;

      $http.put(
        'http://localhost:8000/api/Customers/' + $scope.customer.id,
        $scope.customer
      )

      $location.url('/');
    }

    $scope.cancelDetails = () => {
      $location.url('/');
    }
  }
}
