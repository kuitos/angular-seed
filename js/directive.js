/**
 * Created by kui.liu on 2014/06/30 23:54.
 * @author kui.liu
 */
(function (angular) {
    "use strict";

    angular.module("app", [])

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

                restrict: "E",
                require : "?setText",
                compile: function (element, attr) {


                    
                },
                link: function (scope, element, attr) {

                    


                }


            }

        });

})(window.angular);
