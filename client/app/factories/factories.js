import angular from "angular";
import tokenFactory from './token/token';

let factoriesModule = angular.module('app.factories',[
    tokenFactory
])
.constant('$static',{
    baseUrl:'http://185.88.153.198'
})
.name;


export default factoriesModule;