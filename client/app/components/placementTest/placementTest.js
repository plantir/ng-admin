import angular from 'angular';
import uiRouter from 'angular-ui-router';
import placementTestComponent from './placementTest.component';

let placementTestModule = angular.module('placementTest', [
  uiRouter
])

.config(($stateProvider)=>{
  "ngInject";
  $stateProvider.state('placementTest',{
    parent:'content',
    url:'/placementTest',
    component:'placementTest'
  })
})

.component('placementTest', placementTestComponent)

.name;

export default placementTestModule;
