define(function(require, exports, module) {
	var angular = require("angularjs");
	var $ = require("jquery");
	require("scripts/system/type_manage");
	var main = angular.module("main",["TypeManage"]);
	main.controller("mainController",['$scope', '$http',function($scope, $http) {
		
	}])
	main.config(["$routeProvider", function($routeProvider) {
		$routeProvider
			.when("/main", {templateUrl: "views/main.html"})
			.when("/system/type_manage", {templateUrl: "views/system/type_manage.html",controller:"typeListCtrl"})
			.otherwise({redirectTo : "/main"})
	}]);
	
	angular.bootstrap(document, ['main']);
});
