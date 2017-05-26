import angular from "angular";
import ngResource from "angular-resource";
let strengthFormulaFactory  = angular.module('strengthFormulaFactory',[
    ngResource
])
.factory('$strengthFormula', factory)
.name;


function factory ($resource,$static) {
    "ngInject";
    return $resource($static.baseUrl+'/strengthFormula',{
    },{
        create:{
            method:'PUT',
            url:$static.baseUrl + '/strengthFormula/create'
        },
        delete:{
            method:'DELETE',
            url:$static.baseUrl + '/strengthFormula/delete'
        },
        edit:{
            method:'POST',
            url:$static.baseUrl + '/strengthFormula/edit/:id',
            params:{id:'@id'}
        },
        list:{
            method:'POST',
            url:$static.baseUrl + '/strengthFormula/list',
        }
    });
}

export default strengthFormulaFactory;
