import angular from 'angular';
import uiRouter from 'angular-ui-router';
import menuTriggerComponent from './menuTrigger.component';

let menuTriggerModule = angular.module('menuTrigger', [
  uiRouter
])

.component('menuTrigger', menuTriggerComponent)

.name;

export default menuTriggerModule;
