/**
 * Created by kui.liu on 2014/06/30 22:51.
 * @author kui.liu
 */
(function (angular) {
    "use strict";

    angular.module("app", [])

    /**
     serivce return $get()
     provider return <b>this<b> constructor
     */
        .provider("app", function () {

            var name = "provider",
                getName = function () {
                    return name;
                };

            this.setName = function (newName) {
                name = newName;
            };

            this.$get = function () {

                return {
                    setName: this.setName,
                    getName: getName
                }
            }
        })

    /**
     * factory return object or function
     */
        .factory("objFactory", function () {
            return {
                name: "objFactory"
            }
        })

        .factory("fnFactory", ["app", function (app) {
            return function (appName) {
                app.setName(appName);
                return "fnFactory called";
            }
        }])

    /**
     * service return this constructor
     */
        .service("service", function () {
            this.name = "service";

            this.getName = function () {
                return this.name;
            };
        })

    /**
     * constant return object, configurable
     */
        .constant("constant", {
            name: "constant"
        })

    /**
     * value return object
     */
        .value("value", {
            name: "value"
        })

        .config(["appProvider", "constant", function (appProvider, constant) {
            appProvider.setName("app configured:" + constant.name);
        }])

        .run(["app", "objFactory", "fnFactory", "service", "constant", "value", function (app, objFactory, fnFactory, service, constant, value) {

            console.log("app name:" + app.getName());

            app.setName("app name set");

            console.log("app name:" + app.getName());

            console.log("objFactory name:" + objFactory.name);
            console.log("fnFactory name:" + fnFactory("fnFactory"));
            console.log("service name:" + service.getName());
            console.log("constant name:" + constant.name);
            console.log("value name:" + value.name);

        }])

    ;

})(window.angular);
