import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './customer-overview.routes';
import customerList from './customer-list/customer-list.component';

export default angular.module('customer.customer-overview', [uirouter])
  .config(routes)
  .component("customerList", customerList)
  .name;
