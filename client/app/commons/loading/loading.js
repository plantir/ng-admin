import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loadingComponent from './loading.component';

let loadingModule = angular.module('loading', [
  uiRouter
])



.component('loading', loadingComponent)

.name;

export default loadingModule;
