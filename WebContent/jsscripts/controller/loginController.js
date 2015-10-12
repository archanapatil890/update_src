(function () {
    "use strict";

    var app = angular.module("LoginModule");

    /**
     * @ngdoc controller
     * @name LoginModule.controller
     * @description
     * Dashboard controller
    */
    app.controller("loginController", LoginController);

    /*@ngInject*/
    function LoginController(STATES) {

        var vm = this;

        vm.STATES = STATES;

    }
    
    app.controller("newUserController", NewUserController);

    /*@ngInject*/
    function NewUserController(STATES) {

        var vm = this;

        vm.STATES = STATES;

    }
    
    app.controller("forgetPasswordController", ForgetPasswordController);

    /*@ngInject*/
    function ForgetPasswordController(STATES) {

        var vm = this;

        vm.STATES = STATES;

    }
    
    app.controller("aboutUsController", AboutUsController);

    /*@ngInject*/
    function AboutUsController(STATES) {

        var vm = this;

        vm.STATES = STATES;

    }
    
    app.controller("errorController", ErrorController);

    /*@ngInject*/
    function ErrorController(STATES) {

        var vm = this;

        vm.STATES = STATES;

    }

}());
