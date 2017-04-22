import angular from "angular";
import principal from "./principal/principal";
import authorization from "./authorization/authorization";
import lesson from "./lesson/lesson";
import box from "./box/box";
import pixel from "./pixel/pixel";
let factoriesModule = angular.module('app.factories', [
        principal,
        authorization,
        lesson,
        box,
        pixel
    ])

    .name;


export default factoriesModule;