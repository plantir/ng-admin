import angular from 'angular';
import uiRouter from 'angular-ui-router';

const configModule = angular.module('app.config', [
        uiRouter
    ])
    .config(appConfig)
    .name;
// appConfig.$inject =["$urlRouterProvider"]
function appConfig($urlRouterProvider, $stateProvider) {
    "ngInject";
    $stateProvider
        .state('site', {
            'abstract': true,
            resolve: {
                authorize: ['authorization',
                    function (authorization) {
                        debugger
                        return authorization.authorize();
                    }
                ]
            },
        })

        .state('home',{
            parent:'site',
            url:'/',
            component:'app'
        })
        .state('login',{
            url:'/login',
            component:'login'
        })

        
        .state('404', {
            url: '/404',
            component: 'fourZeroFour'
        })

    $urlRouterProvider.otherwise('404');
}

export default configModule;