import angular from "angular";
import $ from "jquery";
let inputContainerDirective = angular.module('inputContainerDirective', [])
    .directive('inputContainer', directive)
    .name;

function directive($timeout) {
    "ngInject";

    var directive = {
        link: link,
        restrict: 'AEC',

    };
    return directive;

    function link(scope, element, attrs) {

        var $element = $(element);
        var $input = $element.find('input');

        function _hasValue() {
            if ($input[0].value) {
                $element.addClass('has-value');
            } else {
                $element.removeClass('has-value');
            }
        }

        $element.on('click', () => {
            $input.focus();
        });

        $input.on('change paste', () => {
            _hasValue();
        });

        $input.on('focus', () => {
            $element.addClass('active');
        });

        $input.on('blur', () => {
            $element.removeClass('active');
        });
    }
}


function ControllerController() {

}

export default inputContainerDirective;