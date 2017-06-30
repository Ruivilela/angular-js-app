import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './customer.routes';
import customerOverview from './customer-overview';
import customerDetails from './customer-details/customer-details.component';
import customerService from './customer.service';

import CustomerDetailsCtrl from './customer-details/customer-details.controller';

export default angular.module(
  'MyApp.customer',
  [uirouter, customerOverview]
)
  .config(routes)
  .component("customerDetails", customerDetails)
  .controller("CustomerDetailsCtrl", CustomerDetailsCtrl)
  .name;
