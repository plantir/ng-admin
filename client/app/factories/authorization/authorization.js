import angular from "angular";
import ngResource from "angular-resource";

let authorizationFactory = angular.module('authorizationFactory', [
        ngResource
    ])
    .factory('authorization', factory)
    .name;


function factory($rootScope, $state, principal) {
    "ngInject";
    return {
        authorize: function () {
            return principal.identity()
                .then(function () {
                    var isAuthenticated = principal.isAuthenticated();

                    if ($rootScope.toState.data.roles &&
                        $rootScope.toState
                        .data.roles.length > 0 &&
                        !principal.isInAnyRole(
                            $rootScope.toState.data.roles)) {
                        if (isAuthenticated) {
                            // user is signed in but not
                            // authorized for desired state
                            $state.go('accessdenied');
                        } else {
                            // user is not authenticated. Stow
                            // the state they wanted before you
                            // send them to the sign-in state, so
                            // you can return them when you're done
                            $rootScope.returnToState = $rootScope.toState;
                            $rootScope.returnToStateParams = $rootScope.toStateParams;

                            // now, send them to the signin state
                            // so they can log in
                            $state.go('signin');
                        }
                    }
                });
        }
    };
}

export default authorizationFactory;