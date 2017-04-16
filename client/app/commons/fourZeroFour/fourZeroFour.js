import angular from 'angular';
import uiRouter from 'angular-ui-router';
import fourZeroFourComponent from './fourZeroFour.component';

let fourZeroFourModule = angular.module('fourZeroFour', [
  uiRouter
])

.component('fourZeroFour', fourZeroFourComponent)

.name;

export default fourZeroFourModule;
