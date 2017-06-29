import angular from 'angular';
import uirouter from 'angular-ui-router';
import customer from './components/customer';
import routes from './app.routes';


angular.module("MyApp", [uirouter, customer])
  .config(routes)
