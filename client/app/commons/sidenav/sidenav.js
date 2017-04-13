import angular from 'angular';
import sidenavComponent from './sidenav.component';
import ngAnimate from "angular-animate";
import  "angular-material/modules/js/core/core";
import  "angular-material/modules/js/backdrop/backdrop";
import  "angular-material/modules/js/sidenav/sidenav";
let sidenavModule = angular.module('sidenav', [
  "material.components.sidenav"
])

.component('sidenav', sidenavComponent)

.name;

export default sidenavModule;
