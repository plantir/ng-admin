import angular from 'angular';


let tokenService = angular.module('tokenService',[])
    .service('$token', service)
    .name;



function service($http,$static) {
    "ngInject";
    this.SignIn  = (params={}) => {
        // body function
        $http.post(`${$static.baseUrl}/token/SignIn`,{Username:params.Username,Password:params.Password})
    }
}

export default tokenService;