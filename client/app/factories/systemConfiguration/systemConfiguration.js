import angular from "angular";
import ngResource from "angular-resource";
let systemConfigurationFactory = angular.module('systemConfigurationFactory', [
        ngResource
    ])
    .factory('$systemConfiguration', factory)
    .name;


function factory($resource, $static) {
    "ngInject";
    return $resource($static.baseUrl + '/systemConfiguration', {}, {
        // create: {
        //     method: 'PUT',
        //     url: $static.baseUrl + '/systemConfiguration/create'
        // },
        // delete: {
        //     method: 'DELETE',
        //     url: $static.baseUrl + '/systemConfiguration/delete'
        // },
        // edit: {
        //     method: 'POST',
        //     url: $static.baseUrl + '/systemConfiguration/edit/:id',
        //     params: {
        //         id: '@id'
        //     }
        // },
        // list: {
        //     method: 'POST',
        //     url: $static.baseUrl + '/systemConfiguration/list',
        // },
        ListPlacementTestThreshold: {
            method: 'POST',
            url: $static.baseUrl + '/systemConfiguration/ListPlacementTestThreshold',
        },
        
        CreatePlacementTestThreshold: {
            method: 'PUT',
            url: $static.baseUrl + '/systemConfiguration/CreatePlacementTestThreshold',
        },

        EditPlacementTestThreshold: {
            method: 'POST',
            url: $static.baseUrl + '/systemConfiguration/EditPlacementTestThreshold/:id',
            params: {
                id: '@id'
            }
        },
        
        DeletePlacementTestThreshold: {
            method: 'DELETE',
            url: $static.baseUrl + '/systemConfiguration/DeletePlacementTestThreshold?id=:id',
            params: {
                id: '@id'
            }
        },
    });
}

export default systemConfigurationFactory;