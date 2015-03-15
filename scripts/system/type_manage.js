define(function(require,exports,module) {
	var type_manage = angular.module('TypeManage', []);
	
	type_manage.controller("typeListCtrl",function($scope,$http){
		$http.get("http://localhost:8080/blog/manage/gradeOne").success(function(data){
			$scope.gradeOne = data;
			$scope.tableHeader = data[0].name;
			if(data[0]){
				$http.get("http://localhost:8080/blog/manage/typeList?parentId="+data[0].id).success(function(data){
					$scope.tableData = data;
				})
			}
			
		})
	})
	
	module.exports = type_manage;
});