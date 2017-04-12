import angular from "angular";
// import $ from "jquery";
var $ = require('jquery');
require("jquery-mousewheel")($);
require('malihu-custom-scrollbar-plugin')($);
let customScrollBarDirective = angular.module('customScrollBarDirective', [])
    .directive('customScrollBar', directive)
    .name;

function directive() {
    "ngInject";

    var directive = {
        link: link,
        restrict: 'AEC',

    };
    return directive;

    function link(scope, element, attrs) {
        $(element).mCustomScrollbar({
            theme:"dark",
            axis: "y",
            autoHideScrollbar:true,
            // scrollbarPosition:"outside"
        });
    }
}


function ControllerController() {

}

export default customScrollBarDirective;