import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './navigation-data.routes';

export default angular.module('MyApp.navigation-data', [uirouter])
  .config(routes)
  .name;
