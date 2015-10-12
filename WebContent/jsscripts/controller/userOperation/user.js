(function () {
    "use strict";

    /**
     * @module User
     * @requires ui.router
     * @description
     * Top level module for this application - User
     *
    */
    var app = angular.module("UserModule", ["ui.router"]);

    /*@ngInject*/
    app.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/notification");

        $stateProvider
            .state("dashboard", {
                url: "/notification",
                templateUrl: "jsscripts/views/user/dashboard.html",
                controller: "userDashboardController",
                controllerAs: "user"
            })
            .state("entry", {
                url: "/entry",
                templateUrl: "jsscripts/views/user/entry.html",
                controller: "userEntryController",
                controllerAs: "user"
            })
            .state("myInfo", {
                url: "/my_info",
                templateUrl: "jsscripts/views/user/user.html",
                controller: "userController",
                controllerAs: "user"
            })
            .state("members", {
                url: "/members",
                templateUrl: "jsscripts/views/user/members.html",
                controller: "membersController",
                controllerAs: "user"
            })
            .state("member", {
                url: "/member",
                templateUrl: "jsscripts/views/user/member.html",
                controller: "memberController",
                controllerAs: "user"
            })
	        .state("reports", {
	            url: "/reports",
	            templateUrl: "jsscripts/views/user/reports.html",
	            controller: "reportsController",
	            controllerAs: "user"
	        })
	        .state("report", {
                url: "/report",
                templateUrl: "jsscripts/views/user/report.html",
                controller: "reportController",
                controllerAs: "user"
            })
            .state("setting", {
                url: "/setting",
                templateUrl: "jsscripts/views/user/setting.html",
                controller: "settingController",
                controllerAs: "user"
            })
            .state("entrySetting", {
                url: "/entry_setting",
                templateUrl: "jsscripts/views/user/entrySetting.html",
                controller: "memberController",
                controllerAs: "user"
            })
            .state("importReports", {
                url: "/import_setting",
                templateUrl: "jsscripts/views/user/importReport.html",
                controller: "memberController",
                controllerAs: "user"
            });

    });

})();
