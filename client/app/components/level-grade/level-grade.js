import angular from 'angular';
import uiRouter from 'angular-ui-router';
import levelGradeComponent from './level-Grade.component';

let levelGradeModule = angular.module('level-Grade', [
  uiRouter
])

.config(($stateProvider)=>{
  "ngInject";
  $stateProvider.state('level',{
    parent:'numbers',
    url:'/level',
    component:'levelGrade'
  }).state('grade',{
    parent:'numbers',
    url:'/grade',
    component:'levelGrade'
  })
})

.component('levelGrade', levelGradeComponent)

.name;

export default levelGradeModule;
