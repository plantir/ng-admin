import angular from 'angular';
import  "angular-material/modules/js/core/core";
import  "angular-material/modules/js/icon/icon";

import menuTrigger from './menuTrigger/menuTrigger';
import sidenav from './sidenav/sidenav';
import header from './header/header';
import logo from './logo/logo';
import topMenu from './topMenu/topMenu';
import footer from './footer/footer';



let commonsModule = angular.module('app.commons', [
        "material.components.icon",
        menuTrigger,
        sidenav,
        header,
        footer,
        logo,
        topMenu,
    ])
    .name;

export default commonsModule;