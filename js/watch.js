/**
 * Created by kui.liu on 2014/07/03 13:54.
 * @author kui.liu
 */
(function (angular) {
    "use strict";

    angular.module("watch", [])

        .controller("WatchCtrl", ["$scope","$rootScope", function ($scope,$rootScope) {

            var i;
            $scope.array = [];

            for (i = 0; i < 2000; i++) {
                $scope.array.push(i);
            }

            console.log($rootScope);
        }]);

})(window.angular);
