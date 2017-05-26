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
        ListStrengthFormula: {
            method: 'POST',
            url: $static.baseUrl + '/systemConfiguration/ListStrengthFormula',
        },
        EditStrengthFormula: {
            method: 'POST',
            url: $static.baseUrl + '/systemConfiguration/EditStrengthFormula',
        },
        CreateStrengthFormula: {
            method: 'PUT',
            url: $static.baseUrl + '/systemConfiguration/CreateStrengthFormula',
        },
        DeleteStrengthFormula: {
            method: 'DELETE',
            url: $static.baseUrl + '/systemConfiguration/DeleteStrengthFormula',
            params: {
                id: '@id'
            }
        },
        ListLevel: {
            method: 'POST',
            url: $static.baseUrl + '/systemConfiguration/ListLevel',
        },
        EditLevel: {
            method: 'POST',
            url: $static.baseUrl + '/systemConfiguration/EditLevel',
        },
        CreateLevel: {
            method: 'PUT',
            url: $static.baseUrl + '/systemConfiguration/CreateLevel',
        },
        DeleteLevel: {
            method: 'DELETE',
            url: $static.baseUrl + '/systemConfiguration/DeleteLevel',
            params: {
                id: '@id'
            }
        },
        ListGrade: {
            method: 'POST',
            url: $static.baseUrl + '/systemConfiguration/ListGrade',
        },
        EditGrade: {
            method: 'POST',
            url: $static.baseUrl + '/systemConfiguration/EditGrade',
        },
        CreateGrade: {
            method: 'PUT',
            url: $static.baseUrl + '/systemConfiguration/CreateGrade',
        },
        DeleteGrade: {
            method: 'DELETE',
            url: $static.baseUrl + '/systemConfiguration/DeleteGrade',
            params: {
                id: '@id'
            }
        },

    });
}

export default systemConfigurationFactory;