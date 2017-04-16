import angular from "angular";
import $ from "jquery";
let inputDirective = angular.module('inputDirective', [])
    .directive('input', directive)
    .name;

function directive() {
    "ngInject";

    var directive = {
        link: link,
        require: ['^?inputContainer', '?ngModel', '?^form'],
        restrict: 'E',
    };
    return directive;

    function link(scope, element, attrs, ctrls) {
        // var containerCtrl = ctrls[0];
        // var hasNgModel = !!ctrls[1];
        // var ngModelCtrl = ctrls[1];
        // var parentForm = ctrls[2];
        // var isReadonly = angular.isDefined(attrs.readonly);
        // var tagName = element[0].tagName.toLowerCase();
        // function setHasValue( hasValue) {
        //     element.toggleClass('md-input-has-value', !!hasValue);
        // };
        // function inputCheckValue() {
        //     // An input's value counts if its length > 0,
        //     // or if the input's validity state says it has bad input (eg string in a number input)
        //     setHasValue(element.val().length > 0 || (element[0].validity || {}).badInput);
        // }
        // inputCheckValue()
    }
}


function ControllerController() {

}

export default inputDirective;