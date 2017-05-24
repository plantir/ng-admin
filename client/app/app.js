import angular from 'angular';
import componentsModule from './components/components';
import directivesModule from './directives/directives';
import factoriesModule from './factories/factories';
import filtersModule from './filters/filters';
import servicesModule from './services/services';
import commosModule from './commons/commons';
import configModule from './config/config';
import AppComponent from './app.component';
import "./app.scss";
angular.module('app', [
    commosModule,
    configModule,
    directivesModule,
    componentsModule,
    filtersModule,
    servicesModule,
    factoriesModule
  ])
  .constant('$static', {
    baseUrl: 'http://88.99.98.177'
  })
  .run(['$rootScope', '$state', '$stateParams',
    'authorization', 'principal',
    function ($rootScope, $state, $stateParams,
      authorization, principal) {
      $rootScope.$on('$stateChangeStart',
        function (event, toState, toStateParams) {
          // track the state the user wants to go to; 
          // authorization service needs this
          $rootScope.toState = toState;
          $rootScope.toStateParams = toStateParams;
          // if the principal is resolved, do an 
          // authorization check immediately. otherwise,
          // it'll be done when the state it resolved.
          debugger
          if (principal.isIdentityResolved())
            authorization.authorize();
        });
    }
  ])

.component('app', AppComponent)
