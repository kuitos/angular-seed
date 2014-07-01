/**
 * Created by kui.liu on 2014/07/01 23:24.
 * @author kui.liu
 */
(function (angular) {
    "use strict";

    angular.module("filter", [])

        .controller("ctrl", ["$scope", function ($scope) {
            $scope.array = [1, 2, 3, 4];
        }])

        .filter("toArray", function () {
            return function (input) {
                return input.split("");
            }
        })

        .filter("reverse", function () {
            return function (inputArray) {
                return inputArray.reverse();
            }
        })

        .filter("array2String", function () {
            return function (input) {
                return input.join("-");
            }
        });

})(window.angular);
