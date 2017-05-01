import angular from 'angular';
import uiRouter from 'angular-ui-router';
import fileManagerComponent from './fileManager.component';
let fileManagerModule = angular.module('fileManager', [
  uiRouter
])

.config(($stateProvider)=>{
  "ngInject";
  $stateProvider.state('fileManager',{
    url:'/fileManager',
    component:'fileManager'
  })
})

.component('fileManager', fileManagerComponent)

.name;

export default fileManagerModule;
