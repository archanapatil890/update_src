(function () {
    "use strict";

    /**
     * @module Login
     * @requires ui.router
     * @description
     * Top level module for this application
     *
    */
    var app = angular.module("LoginModule", ["ui.router"]);

    /*@ngInject*/
    app.config(function ($stateProvider, $urlRouterProvider, STATES) {

        $urlRouterProvider.otherwise("/login");

        $stateProvider
            .state(STATES.LOGIN, {
                url: "/login",
                templateUrl: "jsscripts/views/login.html",
                controller: "loginController",
                controllerAs: "vm"
            })
            .state(STATES.NEW_USER, {
                url: "/new_user",
                templateUrl: "jsscripts/views/new_user.html",
                controller: "newUserController",
                controllerAs: "vm"
            })
            .state(STATES.FORGET_PASSWORD, {
                url: "/forget_password",
                templateUrl: "jsscripts/views/forget_password.html",
                controller: "forgetPasswordController",
                controllerAs: "vm"
            })
            .state(STATES.ABOUT_US, {
                url: "/about_us",
                templateUrl: "jsscripts/views/about_us.html",
                controller: "aboutUsController",
                controllerAs: "vm"
            })
            .state(STATES.ERROR, {
                url: "/error",
                templateUrl: "jsscripts/views/error.html",
                controller: "errorController",
                controllerAs: "vm"
            });

    });

})();
