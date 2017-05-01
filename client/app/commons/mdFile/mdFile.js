import angular from 'angular';
import mdFileComponent from './mdFile.component';
import "../../lib/ng-flow/dist/ng-flow-standalone";

let mdFileModule = angular.module('mdFile', [
  "flow"
])


.component('mdFile', mdFileComponent)

.name;

export default mdFileModule;
