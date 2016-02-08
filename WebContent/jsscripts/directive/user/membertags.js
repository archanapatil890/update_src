
    "use strict";

    /**
     * @module User
     * @$scope,$state,$stateParams
     * @description
     * Top level module for this application - User
     *
    */
    //var app = angular.module("UserModule", ["ui.router"]);
    app.directive("member",['$state', '$stateParams', 
                            function($state,$stateParams){
    	return {
    		restrict: 'E',
    		transclude: true,
    		scope: {},
    		//controller:membeeController,
    		templateUrl: 'jsscripts/directive/user/member.html'
    	}
    }]);
