export default class NavigationDataCtrl {
  constructor($scope, $location, $stateParams){
    $scope.data = [];

    fetch('http://localhost:8000/api/navigationData')
      .then((result) => result.json())
      .then((json) => {
        for(let i = 0 ; i < json.length ; i++){
            if(json[i].customerID == $stateParams.customerID){
              $scope.data.push(json[i]);
            };
        };
        $scope.$apply();
      });

      fetch('http://localhost:8000/api/Customers/' + $stateParams.customerID)
        .then((result) => result.json())
        .then((json) => {
          $scope.name = json.firstName;
          $scope.$apply();
        });

    $scope.backToOverview = () => {
      $location.url('/');
    }

    $scope.sortalphabetically = () => {
      switch($scope.pageorder){
        case "ascending":
          $scope.data = $scope.data.sort(descending)
          $scope.pageorder = "descending"
          break;
        default:
          $scope.data = $scope.data.sort(ascending);
          $scope.pageorder = "ascending"
          break;
      }
    }
  }
}

// functions
const ascending = (a,b) =>  {
  if (a.pages < b.pages){
    return -1;
  }
  if (a.pages > b.pages){
    return 1;
  }
  return 0;
}

const descending = (a,b) =>  {
  if (a.pages < b.pages){
    return 1;
  }
  if (a.pages > b.pages){
    return -1;
  }
  return 0;
}
