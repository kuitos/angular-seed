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
                priority: 2,
                restrict  : "A",
                compile: function () {
                    console.log("compile");
                },
                link      : function (scope, element, attr, ctrl) {
                    console.log("link");
                }
            }
        })

        .directive("genDiv", function () {

            return {
                priority: 1,
                restrict: "AE",
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
