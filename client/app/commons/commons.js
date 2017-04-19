import angular from 'angular';

import "ng-table/bundles/ng-table.js";
import "angular-material/modules/js/core/core";
 import "angular-material/modules/js/icon/icon";
 import "angular-material/modules/js/input/input";
 import "angular-material/modules/js/dialog/dialog";
import "angular-loading-bar";

import menuTrigger from './menuTrigger/menuTrigger';
import sidenav from './sidenav/sidenav';
import header from './header/header';
import logo from './logo/logo';
import topMenu from './topMenu/topMenu';
import footer from './footer/footer';
import fourZeroFour from './fourZeroFour/fourZeroFour';
import login from './login/login';
import loading2 from './loading/loading';



let commonsModule = angular.module('app.commons', [
        "material.components.icon",
        "material.components.input",
        "material.components.dialog",
        "angular-loading-bar",
        "ngTable",
        menuTrigger,
        sidenav,
        header,
        footer,
        logo,
        topMenu,
        fourZeroFour,
        login,
        loading2
    ])
    .name;

export default commonsModule;