import angular from 'angular';
import customScrollBar from './customScrollBar/customScrollBar'
import toggleSubmenu from './toggleSubmenu/toggleSubmenu'
import dropDown from './dropDown/dropDown'
let directivesModule = angular.module('app.directives', [
    customScrollBar,
    toggleSubmenu,
    dropDown,

])
    .name;

export default directivesModule;