export default class CustomerDetailsCtrl {
  constructor($scope, $location){
    $scope.saveDetails = () => {
      $location.url('/');
    }

    $scope.cancelDetails = () => {
      $location.url('/');
    }
  }
}
