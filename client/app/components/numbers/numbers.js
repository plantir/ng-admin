import angular from 'angular';
import uiRouter from 'angular-ui-router';
import numbersComponent from './numbers.component';

let numbersModule = angular.module('numbers', [
  uiRouter
])

.config(($stateProvider)=>{
  "ngInject";
  $stateProvider.state('numbers',{
    parent:'site',
    url:'/numbers',
    component:'numbers'
  })
})

.component('numbers', numbersComponent)

.name;

export default numbersModule;
