export default class NavigationDataCtrl {
  constructor($scope, $location){
    $scope.backToOverview = () => {
      $location.url('/')
    }
  }
}
