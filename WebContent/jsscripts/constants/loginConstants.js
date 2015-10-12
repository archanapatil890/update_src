/**
 * 
 */
(function () {
    "use strict";

    var app = angular.module("LoginModule");

    /**
     * @ngdoc object
     * @name Login constants:STATES
     * @description
     * defines the constant used in enterprise application
     */

    app.constant("STATES", {
        LOGIN: "login",
        NEW_USER: "new_user",
        FORGET_PASSWORD: "forget_password",
        ABOUT_US: "about_us",
        ERROR: "error"
    });

})();