import angular from "angular";
import principal from "./principal/principal";
import authorization from "./authorization/authorization";
import lesson from "./lesson/lesson";
let factoriesModule = angular.module('app.factories', [
        principal,
        authorization,
        lesson
    ])

    .name;


export default factoriesModule;