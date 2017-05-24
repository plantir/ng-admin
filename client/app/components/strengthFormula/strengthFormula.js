import angular from 'angular';
import uiRouter from 'angular-ui-router';
import strengthFormulaComponent from './strengthFormula.component';

let strengthFormulaModule = angular.module('strengthFormula', [
  uiRouter
])

.config(($stateProvider)=>{
  "ngInject";
  $stateProvider.state('strengthFormula',{
    parent:'numbers',
    url:'/strengthFormula',
    component:'strengthFormula'
  })
})

.component('strengthFormula', strengthFormulaComponent)

.name;

export default strengthFormulaModule;
