import angular from "angular";
import ngResource from "angular-resource";
let placementTestFactory = angular.module('placementTestFactory', [
        ngResource
    ])
    .factory('$placementTest', factory)
    .name;


function factory($resource, $static) {
    "ngInject";
    return $resource($static.baseUrl + '/placementTest', {}, {
        create: {
            method: 'PUT',
            url: $static.baseUrl + '/placementTest/create'
        },
        delete: {
            method: 'DELETE',
            url: $static.baseUrl + '/placementTest/delete'
        },
        edit: {
            method: 'POST',
            url: $static.baseUrl + '/placementTest/edit/:id',
            params: {
                id: '@id'
            }
        },
        list: {
            method: 'POST',
            url: $static.baseUrl + '/placementTest/list',
        },
        ChoosePixelsForPlacementTests: {
            method: 'Post',
            headers:{'content-type':'application/json'},
            url: $static.baseUrl + '/placementTest/ChoosePixelsForPlacementTests',
        },
        GetPixelsForPlacementTest: {
            method: 'POST',
            url: $static.baseUrl + '/placementTest/GetPixelsForPlacementTest?testId=:testId'
        },
        ListPlacementTestPixels: {
            method: 'POST',
            url: $static.baseUrl + '/placementTest/ListPlacementTestPixels'
        },
        DeletePixel: {
            method: 'Delete',
            url: $static.baseUrl + '/placementTest/DeletePixel?pixelId=:pixelId',
            params:{pixelId:'@pixelId'}
        },
 

    });
}

export default placementTestFactory;