import angular from "angular";
import principal from "./principal/principal";
import authorization from "./authorization/authorization";
let factoriesModule = angular.module('app.factories', [
        principal,
        authorization
    ])

    .name;


export default factoriesModule;