import angular from 'angular';
import ngAnimate from "angular-animate";
import ngMaterial from "angular-material";
import menuTriggerComponent from './menuTrigger/menuTrigger';
import sidenavComponent from './sidenav/sidenav';
import headerComponent from './header/header';
import logoComponent from './logo/logo';
import topMenuComponent from './topMenu/topMenu';
import footerComponent from './footer/footer';
let commonsModule = angular.module('app.commons', [
        ngMaterial,
        menuTriggerComponent,
        sidenavComponent,
        headerComponent,
        footerComponent,
        logoComponent,
        topMenuComponent,
    ])
    .name;

export default commonsModule;