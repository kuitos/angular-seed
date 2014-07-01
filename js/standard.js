/**
 * Created by kui.liu on 2014/07/02 0:28.
 * @author kui.liu
 */
(function (angular) {
    "use strict";

    angular.module("app", [])

        .controller("Ctrl", ["$scope", function ($scope) {
            // do something
        }])

        // 除constant、value之外，其他service统一采用factory方式创建
        .factory("factory", ["$timeout", function ($timeout) {
            // do something
        }])

        .directive("directive", ["$compile", function ($compile) {

            return {
                compile: function (element, attr) {
                    // do something
                },

                link: function (scope, element, attr) {
                    // do something
                }
            }
        }])

        .filter("filter", ["factory", function (factory) {
            return function (input, type) {
                // do something
            }
        }]);

})(window.angular);
