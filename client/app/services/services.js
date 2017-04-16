import angular from "angular";
import token from './token/token';
let servicesModule = angular.module('app.services',[
    token
])

.name;


export default servicesModule;