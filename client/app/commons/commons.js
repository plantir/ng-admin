import angular from 'angular';
import "angular-material/modules/js/core/core";
import "angular-material/modules/js/icon/icon";
import "angular-material/modules/js/input/input";
import "angular-loading-bar";

import menuTrigger from './menuTrigger/menuTrigger';
import sidenav from './sidenav/sidenav';
import header from './header/header';
import logo from './logo/logo';
import topMenu from './topMenu/topMenu';
import footer from './footer/footer';
import fourZeroFour from './fourZeroFour/fourZeroFour';
import login from './login/login';



let commonsModule = angular.module('app.commons', [
        "material.components.icon",
        "material.components.input",
        "angular-loading-bar",
        menuTrigger,
        sidenav,
        header,
        footer,
        logo,
        topMenu,
        fourZeroFour,
        login
    ])
    .name;

export default commonsModule;