/**
 * Created by kui.liu on 2014/06/30 21:40.
 * @author kui.liu
 */
(function (angular) {
    "use strict";

    angular.module("scopeApp", [])
        .controller("ParentCtrl", ["$scope", function ($scope) {


            $scope.parentName = "parent scope";

        }])

        .controller("ChildCtrl", ["$scope", "$rootScope", function ($scope, $rootScope) {
            $scope.childName = "child scope";

            $rootScope.root = "root";
        }]);

})(window.angular);
