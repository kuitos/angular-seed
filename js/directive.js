/**
 * Created by kui.liu on 2014/06/30 23:54.
 * @author kui.liu
 */
(function (angular) {
    "use strict";

    angular.module("app", [])

        .controller("AppCtrl", function () {

        })

        .directive("setText", function () {

            return {
                restrict  : "A",
                require   : "setText",
                controller: function () {

                    this.setName = function (scope) {
                        scope.directiveName = "setText";
                    };
                },
                link      : function (scope, element, attr, ctrl) {
                    ctrl.setName(scope);
                }
            }
        })

        .directive("genDiv", function () {

            return {

                restrict: "AE",
                require : "?setText",
                compile : function (element, attr) {

                    // do compile,run once, return link function
                    element.html("<span>hello world</span>");

                    return function (scope, element, attr) {
                        var a = scope.$eval(attr.genDiv);
                        element.append("&nbsp;<span>" + a + "</span>");
                    }

                }
//                link    : function (scope, element, attr) {
//                    element.html("<span>hello world</span>");
//                }


            }

        });

})(window.angular);
