import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './customer.routes';
import customerOverview from './customer-overview';

export default angular.module('MyApp.customer',[uirouter, customerOverview])
  .config(routes)
  .name;
