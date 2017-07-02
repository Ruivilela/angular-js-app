import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './app.routes';

import customer from './components/customer';
import navigationData from './components/navigation-data';

angular.module("MyApp", [uirouter, customer, navigationData, '720kb.datepicker'])
  .config(routes)
