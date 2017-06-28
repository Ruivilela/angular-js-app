import angular from 'angular';
import uirouter from 'angular-ui-router';
import customerOverview from './components/customer-overview'; 
import routes from './app.routes';

angular.module("MyApp", [uirouter, customerOverview])
  .config(routes)
