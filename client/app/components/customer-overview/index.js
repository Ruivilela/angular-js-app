import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './customer-overview.routes.js'

export default angular.module('MyApp.customer-overview', [uirouter])
  .config(routes)
  .name; 
