import angular from 'angular';


let <%= name %>Service = angular.module('<%= name %>Service',[])
    .service('$<%= name %>', service)
    .name;



function service($window) {
    "ngInject";
    this.example = (dep1) => {
        // body function
    }
}

export default <%= name %>Service;