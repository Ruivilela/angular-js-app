import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './customer.routes';
import customerOverview from './customer-overview';
import customerDetails from './customer-details'

export default angular.module(
  'MyApp.customer',
  [uirouter, customerOverview , customerDetails]
)
  .config(routes)
  .name;
