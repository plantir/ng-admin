import angular from 'angular';
import uiRouter from 'angular-ui-router';

const configModule = angular.module('app.config', [
        uiRouter
    ])
    .config(appConfig)
    .name;
// appConfig.$inject =["$urlRouterProvider"]
function appConfig($urlRouterProvider, $stateProvider, $httpProvider, $mdDialogProvider) {
    "ngInject";
    $httpProvider.defaults.headers.common = {'Authorization': 'Bearer ' + localStorage.getItem('token')};
    $stateProvider
        .state('site', {
            'abstract': true,
            resolve: {
                authorize: ['authorization',
                    function (authorization) {
                        return authorization.authorize();
                    }
                ]
            },
            template: '<app></app>'
        })

        .state('home', {
            parent: 'site',
            url: '',
            template: 'home'
        })
        
        .state('login', {
            url: '/login',
            component: 'login'
        })


        .state('404', {
            url: '/404',
            component: 'fourZeroFour'
        })

    $urlRouterProvider.otherwise('404');
    $mdDialogProvider.addPreset('confirm', {
        methods: ['title', 'textContent', 'ok', 'cancel', 'doneTitle', 'doneTextContent', 'doneOk', 'doneFN'],
        options: function () {
            return {
                template: `
                <md-dialog class="confirm-dialog">
                    <div ng-if="!dialog.$done">
                        <div class="warning pulseWarning"> 
                            <span class="body pulseWarningIns"></span> 
                            <span class="dot pulseWarningIns"></span> 
                        </div>
                        <h2>{{ dialog.title }}</h2>
                        <p>{{ dialog.textContent }}</p>
                        <div>
                            <button class="cancel btn " ng-click="dialog.abort()" tabindex="2">{{ dialog.cancel }}</button> 
                            <button class="confirm btn" ng-click="dialog.done()" tabindex="1">{{ dialog.ok }}</button>
                        </div>
                    </div>   
                    <div ng-if="dialog.$done">
                        <div class="success animate" style="display: block;">
                            <span class="line tip animateSuccessTip"></span> 
                            <span class="line long animateSuccessLong"></span> 
                            <div class="placeholder"></div> <div class="fix"></div>
                        </div>
                        <h2>{{ dialog.doneTitle }}</h2>
                        <p>{{ dialog.doneTextContent }}</p>
                        <div>
                            
                            <button class="done btn" ng-click="dialog.hide()" tabindex="1">{{ dialog.doneOk }}</button>
                        </div>
                    </div>
                    <loading ng-if="dialog.loading"></loading> 
                </md-dialog>`,
                controller: function mdDialogCtrl($mdDialog) {
                    "ngInject";
                    this.$done = false;



                    this.done = () => {
                        console.log(typeof this.doneFN);
                        if (this.doneFN && typeof this.doneFN === 'function') {

                            this.loading = true;
                            this.doneFN().then(() => {
                                this.loading = false;
                                this.$done = true;

                            }, () => {
                                this.loading = false;
                                this.$err = true;
                            })
                        }
                        else{
                            this.hide(true)
                        }
                    };

                    this.hide = function () {
                        $mdDialog.hide(true);
                    };
                    this.abort = function () {
                        $mdDialog.cancel();
                    };
                    this.keypress = function ($event) {
                        if ($event.keyCode === $mdConstant.KEY_CODE.ENTER) {
                            $mdDialog.cancel();
                        }
                    };
                },
                controllerAs: 'dialog',
                bindToController: true,
                clickOutsideToClose: true,
                escapeToClose: true
            };
        }
    });
}

export default configModule;