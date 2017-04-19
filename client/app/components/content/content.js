import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contentComponent from './content.component';

let contentModule = angular.module('content', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('content', {
      parent:'site',
      url: '/content',
      component: 'content'
    });
})

.component('content', contentComponent)

.name;

export default contentModule;
