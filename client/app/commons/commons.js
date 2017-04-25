import angular from 'angular';

import "ng-table/bundles/ng-table.js";
import "angular-loading-bar";
import "angular-scroll";

import "../lib/angular-material";

import menuTrigger from './menuTrigger/menuTrigger';
import sidenav from './sidenav/sidenav';
import header from './header/header';
import logo from './logo/logo';
import topMenu from './topMenu/topMenu';
import footer from './footer/footer';
import fourZeroFour from './fourZeroFour/fourZeroFour';
import login from './login/login';
import loading from './loading/loading';



let commonsModule = angular.module('app.commons', [
        "ngMaterial",
        "angular-loading-bar",
        "ngTable",
        "duScroll",
        menuTrigger,
        sidenav,
        header,
        footer,
        logo,
        topMenu,
        fourZeroFour,
        login,
        loading
    ])
    .name;

export default commonsModule;