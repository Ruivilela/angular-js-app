import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './customer-details.routes';

export default angular.module('customer.customer-details', [uirouter])
  .config(routes)
  .name;
