import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './customer-create.routes';

export default angular.module(
  'customer.customer-create',
  [uirouter])
  .config(routes)
  .name; 
