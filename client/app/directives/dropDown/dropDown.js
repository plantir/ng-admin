import angular from "angular";
import $ from "jquery";
import './dropDown.scss';
let dropDownDirective = angular.module('dropDownDirective', [])
    .directive('dropDown', directive)
    .name;

function directive($timeout) {
    "ngInject";

    var directive = {
        link: link,
        restrict: 'AEC',

    };
    return directive;

    function link(scope, element, attrs) {
        var clickedElem;
        $(element).on('click', (event) => {
            clickedElem = event.target;
            $(element).parent().toggleClass('open');
        });
        $(document).on('click', (elem) => {
            if (elem.target !== clickedElem) {
                var preventClose = checkHasPreventClose(elem.target)
                if (!elem.target.classList.contains('dropdown-menu') && !preventClose) {
                    $(element).parent().removeClass('open');
                }
            }
        })
    }
}

function checkHasPreventClose(elem) {
    if (elem) {

        if (elem.hasAttribute('prevent-close')) {
            return true;
        }
        return checkHasPreventClose(elem.parentElement)
    }
    else{
        return false;
    }
}

function ControllerController() {

}

export default dropDownDirective;