import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './customer.routes';
import customerOverview from './customer-overview';
import CustomerService from './customer.service'

export default angular.module('MyApp.customer',[uirouter, customerOverview])
  .config(routes)
  .service("CustomerService", CustomerService)
  .name;
