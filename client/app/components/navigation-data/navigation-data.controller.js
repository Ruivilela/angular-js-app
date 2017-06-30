export default class NavigationDataCtrl {
  constructor($scope, $location, $stateParams){
    $scope.data = [];

    fetch('http://localhost:8000/api/navigationData')
      .then((result) => result.json())
      .then((json) => {
        for(let i = 0 ; i < json.length ; i++){
            if(json[i].customerID == $stateParams.customerID){
              $scope.data.push(json[i]);
            }
            $scope.$apply()
        }
      })

    $scope.backToOverview = () => {
      $location.url('/')
    }
  }
}
