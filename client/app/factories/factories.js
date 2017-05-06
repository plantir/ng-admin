import angular from "angular";
import principal from "./principal/principal";
import authorization from "./authorization/authorization";
import lesson from "./lesson/lesson";
import box from "./box/box";
import pixel from "./pixel/pixel";
import placementTest from "./placementTest/placementTest";
import systemConfiguration from "./systemConfiguration/systemConfiguration";
let factoriesModule = angular.module('app.factories', [
        principal,
        authorization,
        lesson,
        box,
        pixel,
        placementTest,
        systemConfiguration
    ])

    .name;


export default factoriesModule;