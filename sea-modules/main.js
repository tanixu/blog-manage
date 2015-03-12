define(function(require, exports, module) {
	var angular = require("angularjs");
	var $ = require("jquery.min.js");
	var main = angular.module("main",[]);
	
	main.controller("mainController",['$scope', '$http',
		function($scope, $http) {
//			$http.get('http://localhost:8080/hotelmanage/checkUser').success(function(data) {
//				//alert(data);
//			}).error(function(){
//				//alert('error');
//			});
			$http.get("assets/json/index-nav.json").success(function(data){
				$scope.navList = data;
			})
		}
	])
	module.exports = main;
});
