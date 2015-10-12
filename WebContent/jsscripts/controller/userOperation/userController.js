(function () {
    "use strict";

    var app = angular.module("UserModule");

    /**
     * @ngdoc controller
     * @name UserModule.controller
     * @description
     * 
    */
    app.controller("userHeaderController", ['$scope', function($scope) {
    	  $scope.name = 'archana';
    }]);
    
    app.controller("userDashboardController", ['$scope', function($scope) {}]);
    
    app.controller("userEntryController", ['$scope', function($scope) {}]);
    
    app.controller("userController", ['$scope', function($scope) {}]);
    
    app.controller("membersController", ['$scope', function($scope) {}]);
    
    app.controller("memberController", ['$scope', function($scope) {}]);
    
    app.controller("reportsController", ['$scope', function($scope) {}]);
    
    app.controller("reportController", ['$scope', function($scope) {}]);
    
    app.controller("settingController", ['$scope', function($scope) {}]);
    
    app.controller("entrySetting", ['$scope', function($scope) {}]);
    
    app.controller("importReports", ['$scope', function($scope) {}]);

}());
