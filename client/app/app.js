import angular from 'angular';
import configModule from './config/config';
import componentsModule from './components/components';
import directivesModule from './directives/directives';
import factoriesModule from './factories/factories';
import filtersModule from './filters/filters';
import servicesModule from './services/services';
import commosModule from './commons/commons';
import AppComponent from './app.component';
import "../scss/app.scss";
angular.module('app', [
    configModule,
    commosModule,
    directivesModule,
    componentsModule,
    filtersModule,
    servicesModule,
    factoriesModule
  ])

  .component('app', AppComponent);