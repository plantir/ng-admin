import angular from "angular";
import ngResource from "angular-resource";
let pixelFactory  = angular.module('pixelFactory',[
    ngResource
])
.factory('$pixel', factory)
.name;


function factory ($resource,$static) {
    "ngInject";
    return $resource($static.baseUrl+'/pixel',{
    },{
        create:{
            method:'PUT',
            url:$static.baseUrl + '/pixel/create'
        },
        delete:{
            method:'DELETE',
            url:$static.baseUrl + '/pixel/delete'
        },
        edit:{
            method:'POST',
            url:$static.baseUrl + '/pixel/edit/:id',
            params:{id:'@id'}
        },
        list:{
            method:'POST',
            url:$static.baseUrl + '/pixel/list',
        }
    });
}

export default pixelFactory;
