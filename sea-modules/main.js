define(function(require, exports, module) {
	var angular = require("angularjs");
	var $ = require("jquery");
	var type_manage = require("system/type_manage");
	var main = angular.module("main",[]);
	
	main.controller("mainController",['$scope', '$http',
		function($scope, $http) {
//			$http.get('http://localhost:8080/hotelmanage/checkUser').success(function(data) {
//				//alert(data);
//			}).error(function(){
//				//alert('error');
//			});
			$("#link").click(function(){
//				$(this).closest().find("li").removeClass("active");
//				$(this).addClass("active");
				alert('a');
			})
		}
	])
	main.config(["$routeProvider", function($routeProvider) {
		$routeProvider
			.when("/main", {templateUrl: "views/main.html"})
			.when("/system/type_manage", {templateUrl: "views/system/type_manage.html"})
			.otherwise({redirectTo : "/main"})
	}]);
	
	module.exports = main;
});
