import NavigationDataModule from '~/client/app/components/navigation-data/index.js';
import NavigationDataCtrl from '~/client/app/components/navigation-data/navigation-data.controller.js';

describe('Navigation-data', () => {
  let $scope;

  beforeEach(window.module(NavigationDataModule));

  beforeEach(inject(($rootScope, $controller) => {
    $scope = $rootScope.$new();
    $controller(NavigationDataCtrl, {$scope: $scope})
  }))

  describe("NavigationDataCtrlController", () => {
    it('Controller has data as property', () => {
      expect($scope).toHaveProperties("data");
    });

    it('Controller has backToOverview as property', () => {
      expect($scope).toHaveProperties("backToOverview");
    });

    it('Controller has sortalphabetically as property', () => {
      expect($scope).toHaveProperties("sortalphabetically");
    });

    it('Controller has sortTimeStamp  as property', () => {
      expect($scope).toHaveProperties("sortTimeStamp");
    });
  })
})
