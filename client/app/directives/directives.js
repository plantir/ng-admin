import angular from 'angular';
import customScrollBarDirective from './customScrollBar/customScrollBar'
import customtoggleSubmenu from './toggleSubmenu/toggleSubmenu'
let directivesModule = angular.module('app.directives', [
    customScrollBarDirective,
    customtoggleSubmenu
])
    .name;

export default directivesModule;