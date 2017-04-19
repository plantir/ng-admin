import angular from 'angular';
import uiRouter from 'angular-ui-router';
import lessonComponent from './lesson.component';

let lessonModule = angular.module('lesson', [
  uiRouter
])
.config(($stateProvider)=>{
  "ngInject";
  $stateProvider.state('lesson',{
    parent:'mainContent',
    url:'/lesson',
    component:'lesson'
  });

})
.component('lesson', lessonComponent)

.name;

export default lessonModule;
