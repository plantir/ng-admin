import angular from 'angular';
import customScrollBar from './customScrollBar/customScrollBar';
import toggleSubmenu from './toggleSubmenu/toggleSubmenu';
import dropDown from './dropDown/dropDown';
import inputContainer from './inputContainer/inputContainer';
import input from './input/input';
let directivesModule = angular.module('app.directives', [
    customScrollBar,
    toggleSubmenu,
    dropDown,
    inputContainer,
    input,

])
    .name;

export default directivesModule;