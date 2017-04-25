import angular from 'angular';

import "ng-table/bundles/ng-table.js";
import "angular-material/modules/js/core/core";
import "angular-material/modules/js/icon/icon";
import "angular-material/modules/js/input/input";
import "angular-material/modules/js/dialog/dialog";
import "angular-material/modules/js/select/select";
import "angular-loading-bar";

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
        "material.components.icon",
        "material.components.input",
        "material.components.dialog",
        "material.components.select",
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
        loading
    ])
    .name;

export default commonsModule;