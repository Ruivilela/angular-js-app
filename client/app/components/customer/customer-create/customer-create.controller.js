export default class CustomerCreateCtrl {
  constructor($scope, $location, $http){
    $scope.cancelCreate = () => {
      $location.url('/')
    }

    $scope.createCustomer =
      (
        firstName,
        lastName,
        birthday,
        gender,
        lastContacted,
        value
      ) => {
        const new_customer = {
          "firstName": firstName,
          "lastName": lastName,
          "birthday": birthday,
          "gender": gender,
          "lastContacted": lastContacted,
          "value": value
        }
        $http.post(
          'http://localhost:8000/api/Customers',
          new_customer
        )

        $location.url('/')

    }
  }
}
