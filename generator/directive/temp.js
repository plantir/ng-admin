import angular from "angular";
let <%= name %>Directive = angular.module('<%= name %>Directive', [])
    .directive('<%= name %>', directive)
    .name;
function directive() {
    "ngInject";

    var directive = {
        link: link,
        restrict: 'AEC',
        
    };
    return directive;

    function link(scope, element, attrs) {

    }
}


function ControllerController() {

}

export default <%= name %>Directive;