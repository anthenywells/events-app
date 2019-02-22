
"use strict";
function expand() {
    return {
        restrict: "A",
        link: function($scope, $element, $attrs) {
            $element.on("click", function() {
                console.log("click")
            })
        }
    }
}

angular
    .module("eventsApp")
    .directive("expand", expand);