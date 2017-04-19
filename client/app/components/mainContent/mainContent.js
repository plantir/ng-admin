import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainContentComponent from './mainContent.component';

let mainContentModule = angular.module('mainContent', [
    uiRouter
  ])
  .config(($stateProvider) => {
    "ngInject";
    $stateProvider.state('mainContent',{
      parent:'content',
      url:'/main-content',
      component:'mainContent'
    })
  })
  .component('mainContent', mainContentComponent)

  .name;

export default mainContentModule;