import angular from 'angular';
import uiRouter from 'angular-ui-router';
import topMenuComponent from './topMenu.component';

let topMenuModule = angular.module('topMenu', [
  uiRouter
])

.component('topMenu', topMenuComponent)

.name;

export default topMenuModule;
