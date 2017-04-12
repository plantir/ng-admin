import angular from 'angular';
import uiRouter from 'angular-ui-router';

const configModule = angular.module('app.config', [
        uiRouter
    ])
    .config(appConfig)
    .name;
// appConfig.$inject =["$urlRouterProvider"]
function appConfig($urlRouterProvider) {
    "ngInject"
    $urlRouterProvider.otherwise('404');
}

export default configModule;
