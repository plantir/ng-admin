import angular from "angular";
import ngResource from "angular-resource";

let <%= name %>Factory  = angular.module('<%= name %>Factory',[
    ngResource
])
.factory('$<%= name %>', factory)
.name;


function factory ($resource) {
    "ngInject";
    return $resource(`/<%= name %>`,{
        
    },{

    });
}

export default <%= name %>Factory;
