export default class CustomerOverviewCtrl {
  constructor($scope, $location){
    $scope.redirectCustomerDetail = () => {
      $location.url('/customer-details')
    }
  }
}
