import angular from "angular";
import ngResource from "angular-resource";
let boxFactory  = angular.module('boxFactory',[
    ngResource
])
.factory('$box', factory)
.name;


function factory ($resource,$static) {
    "ngInject";
    return $resource($static.baseUrl+'/box',{
    },{
        create:{
            method:'PUT',
            url:$static.baseUrl + '/box/create'
        },
        delete:{
            method:'DELETE',
            url:$static.baseUrl + '/box/delete'
        },
        edit:{
            method:'POST',
            url:$static.baseUrl + '/box/edit/:id',
            params:{id:'@id'}
        },
        list:{
            method:'POST',
            url:$static.baseUrl + '/box/list',
        }
    });
}

export default boxFactory;
