import angular from "angular";
import ngResource from "angular-resource";
let lessonFactory = angular.module('lessonFactory', [
        ngResource
    ])
    .factory('$lesson', factory)
    .name;


function factory($resource, $static) {
    "ngInject";
    return $resource($static.baseUrl + '/lesson', {

    }, {
        create: {
            method: 'PUT',
            url: $static.baseUrl + '/lesson/create'
        },
        delete: {
            method: 'DELETE',
            url: $static.baseUrl + '/lesson/delete',
            params: {
                id: '@id'
            }
        },
        edit: {
            method: 'POST',
            url: $static.baseUrl + '/lesson/edit/:id',
            params: {
                id: '@id'
            }
        },
        list: {
            method: 'POST',
            url: $static.baseUrl + '/lesson/list',
            params: {
                id: '@id'
            }
         
        }
    });
}

export default lessonFactory;