export default class CustomerListCtrl {
  constructor($scope, $location, $stateParams, $http){
    $scope.editCustomer = (customerID) => {
      $location.url('/customer-details/' + customerID)
    }

    $scope.goNavigationData = (customerID) => {
      $location.url('/navigation-data/' + customerID)
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

    $scope.filterFirstName = () => {
      switch($scope.fnFilter){
        case "ascending":
          this.customers = this.customers.sort(descendingFn);
          $scope.fnFilter = "descending";
          break;
        default:
          this.customers = this.customers.sort(ascendingFn);
          $scope.fnFilter = "ascending";
          break;
      }
    }

    $scope.filterLastName = () => {
      switch($scope.lnFilter){
        case "ascending":
          this.customers = this.customers.sort(descendingLn);
          $scope.lnFilter = "descending";
          break;
        default:
          this.customers = this.customers.sort(ascendingLn);
          $scope.lnFilter = "ascending";
          break;
      }
    }

    $scope.deleteCustomer = (customerID, index) => {
      this.customers.splice(index, 1);
      $http.delete(
        'http://localhost:8000/api/Customers/' + customerID
      )
    }
  }
}

// functions --> this needs refractor
const ascendingFn = (a,b) => {
  if (a.firstName < b.firstName){
    return -1;
  }
  if (a.firstName > b.firstName){
    return 1;
  }
  return 0;
}

const descendingFn = (a,b) =>  {
  if (a.firstName < b.firstName){
    return 1;
  }
  if (a.firstName < b.firstName){
    return -1;
  }
  return 0;
}

const ascendingLn = (a,b) =>  {
  if (a.lastName < b.lastName){
    return -1;
  }
  if (a.lastName > b.lastName){
    return 1;
  }
  return 0;
}

const descendingLn = (a,b) =>  {
  if (a.lastName < b.lastName){
    return 1;
  }
  if (a.lastName > b.lastName){
    return -1;
  }
  return 0;
}
