import angular from "angular";
import ngResource from "angular-resource";
let <%= name %>Factory  = angular.module('<%= name %>Factory',[
    ngResource
])
.factory('$<%= name %>', factory)
.name;


function factory ($resource,$static) {
    "ngInject";
    return $resource($static.baseUrl+'/<%= name %>',{
    },{
        create:{
            method:'PUT',
            url:$static.baseUrl + '/<%= name %>/create'
        },
        delete:{
            method:'DELETE',
            url:$static.baseUrl + '/<%= name %>/delete'
        },
        edit:{
            method:'POST',
            url:$static.baseUrl + '/<%= name %>/edit/:id',
            params:{id:'@id'}
        },
        list:{
            method:'POST',
            url:$static.baseUrl + '/<%= name %>/list',
        }
    });
}

export default <%= name %>Factory;
