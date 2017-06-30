import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './navigation-data.routes';
import NavigationDataCtrl from './navigation-data.controller';

export default angular.module('MyApp.navigation-data', [uirouter])
  .config(routes)
  .controller("NavigationDataCtrl", NavigationDataCtrl)
  .name;
