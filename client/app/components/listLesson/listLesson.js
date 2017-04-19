import angular from 'angular';
import uiRouter from 'angular-ui-router';
import listLessonComponent from './listLesson.component';

let listLessonModule = angular.module('listLesson', [
  uiRouter
])
.config(($stateProvider)=>{
  "ngInject";
  $stateProvider.state('listLesson',{
    parent:'lesson',
    url:'/listLesson',
    component:'listLesson'
  })
})
.component('listLesson', listLessonComponent)

.name;

export default listLessonModule;
