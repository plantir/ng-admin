import angular from 'angular';
import uiRouter from 'angular-ui-router';

const configModule = angular.module('app.config', [
        uiRouter
    ])
    .config(appConfig)
    .name;
// appConfig.$inject =["$urlRouterProvider"]
function appConfig($urlRouterProvider, $stateProvider, $httpProvider, $mdDialogProvider, $mdThemingProvider, $mdToastProvider) {
    "ngInject";
    $mdThemingProvider.theme('default')
        .primaryPalette('light-blue')
        .accentPalette('deep-orange')
        .warnPalette('red');
    $httpProvider.defaults.headers.common = {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        "content-type": "application/x-www-form-urlencoded"

    };
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
                    <div ng-if="!dialog.$done && !dialog.$error">
                        <div class="warning pulseWarning"> 
                            <span class="body pulseWarningIns"></span> 
                            <span class="dot pulseWarningIns"></span> 
                        </div>
                        <h2>{{ dialog.title }}</h2>
                        <p>{{ dialog.textContent }}</p>
                        <div>
                            <md-button class="md-raised md-primary" ng-click="dialog.done()" tabindex="1">{{ dialog.ok }}</md-button>
                            <md-button class="md-raised md-warn md-hue-2" ng-click="dialog.abort()" tabindex="2">{{ dialog.cancel }}</md-button> 
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
                            
                            <md-button class="md-raised md-primary" ng-click="dialog.hide()" tabindex="1">{{ dialog.doneOk }}</md-button>
                        </div>
                    </div>
                    <div ng-if="dialog.$error">
                        <div class="error pulseError"> 
                            <span class="body pulseErrorIns"></span> 
                            <span class="dot pulseErrorIns"></span> 
                        </div>
                        <h2>{{ dialog.errTitle }}</h2>
                        <p>{{ dialog.errTextContent }}</p>
                        <div>
                            <md-button class="md-raised md-primary" ng-click="dialog.done()" tabindex="1">{{ dialog.errRetry }}</md-button>
                            <md-button class="md-raised md-warn md-hue-2" ng-click="dialog.abort()" tabindex="2">{{ dialog.errCancel }}</md-button> 
                        </div>
                    </div>
                    <loading ng-if="dialog.loading"></loading> 
                </md-dialog>`,
                controller: function mdDialogCtrl($mdDialog) {
                    "ngInject";
                    this.$done = false;
                    this.ok = this.ok || 'بله انجام بده';
                    this.title = this.title || 'آیا از انجام این کار مطمئن هستید؟';
                    this.textContent = this.textContent || 'این عملیات غیر قابل بازگشت می باشد';
                    this.doneOk = this.doneOk || 'انجام شد';
                    this.doneTitle = this.doneTitle || 'انجام شد';
                    this.doneTextContent = this.doneTextContent || 'در خواست شما با موفقیت انجام شد';
                    this.errTitle = this.errTitle || 'خطایی رخ داده است.';
                    this.errTextContent = this.errTextContent || 'در انجام عملیات مشکلی پیش آمده است';
                    this.cancel = this.cancel || 'منصرف شدم';
                    this.errCancel = this.errCancel || 'منصرف شدم';
                    this.errRetry = this.errRetry || 'دوباره سعی کن';

                    this.done = () => {
                        if (this.doneFN && typeof this.doneFN === 'function') {

                            this.loading = true;
                            this.doneFN().then(() => {
                                this.loading = false;
                                this.$done = true;

                            }, (err) => {
                                this.loading = false;
                                this.$error = true;
                                console.error(err);

                            })
                        } else {
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
    $mdToastProvider.addPreset('notify', {
        methods: ['textContent','parent','position','hideDelay'],
        options: function () {
            return {
                template: `
                    <md-toast class="animated ng-zoomOut ng-flipInX">
                        <div class="md-toast-content orange darken-3 ">
                            {{toast.textContent}}
                            <i class="zmdi zmdi-close" style="position:absolute;left:15px;top:calc(50% - 5px)" ng-click="toast.close()"></i>
                        </div>

                    </md-toast>`,
                controllerAs: 'toast',
                controller:function mdToastCtrl($mdToast){
                    "ngInject"

                    this.close = ()=>{
                        console.log("object");
                        $mdToast.hide()
                    }
                },
                bindToController: true
            };
        }
    });
}

export default configModule;