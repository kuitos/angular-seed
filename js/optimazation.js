/**
 * Created by kui.liu on 2014/07/02 0:50.
 * @author kui.liu
 */
(function (angular) {
    "use strict";

    angular.module("optimazation", [])

        .controller("Ctrl", ["$scope", "$timeout", function ($scope, $timeout) {
            $timeout(function () {
                $scope.text = "hello world";

            }, 3000);

            // 及时移除不必要的$watch
            var unwatch = $scope.$watch("someKey", function (newValue, oldValue) {
                //do sth...
                if (someCondition) {
                    //当不需要的时候,及时移除watch
                    unwatch();
                }
            });

            // 延迟执行
            $http.get('http://path/to/url').success(function (data) {
                $scope.name = data.name;
                $timeout(function () {
                    //do sth later, such as log
                }, 0, false);
            });

        }])

})(window.angular);
