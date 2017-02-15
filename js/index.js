angular.module("movieApp.indexCtrl",[])
.controller("indexCtrl",["$scope","$location",
	function($scope,$location){
		$scope.searchName = "";
		$scope.search = function(){
			console.log($scope.searchName);
			// window.location.href = "#/search/"+$scope.searchName;
			$location.url("/search/"+$scope.searchName);
		}

	}])

