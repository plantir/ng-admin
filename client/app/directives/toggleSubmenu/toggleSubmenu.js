import angular from "angular";
import $ from "jquery";
let toggleSubmenuDirective = angular.module('toggleSubmenuDirective', [])
    .directive('toggleSubmenu', directive)
    .name;

function directive() {
    "ngInject";

    var directive = {
        link: link,
        restrict: 'AEC',

    };
    return directive;

    function link(scope, element, attrs) {
        $(element).siblings("ul").hide();
        $(element).on('click', () => {
            $(element).parent().toggleClass('toggled');
            $(element).next().slideToggle(200);
        });
    }
}


function ControllerController() {

}

export default toggleSubmenuDirective;