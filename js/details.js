angular.module("movieApp.detailsCtrl",[])
.controller("detailsCtrl",["$scope","$movieServ","$routeParams",
	function($scope,$movieServ,$routeParams){
	$movieServ.jsonp("https://api.douban.com/v2/movie/subject/" 
		+ $routeParams.id,{},function(data){
		$scope.movie = data;
		console.log($scope.movie);
		$scope.$apply();
	});
}])