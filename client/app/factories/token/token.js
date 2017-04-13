import angular from "angular";
import ngResource from "angular-resource";

let tokenFactory  = angular.module('tokenFactory',[
    ngResource
])
.factory('$token', factory)
.name;


function factory ($resource,$static) {
    "ngInject";
    return $resource(`${$static.baseUrl}/Token/SignIn`,{
        
    },{

    });
}

export default tokenFactory;
