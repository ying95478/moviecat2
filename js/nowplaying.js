//创建一个控制器
angular.module("movieApp.nowplayingCtrl",[])
.controller("nowplayingCtrl",["$scope","$movieServ",function($scope,$movieServ){
	//实现电影列表展示功能
	$scope.movie = {};

	//通过ajax请求data.json中的数据,将它赋值给$scope.movie
	//$http就是帮我们实现ajax请求的,和jq中的ajax方式有点不一样
	/*$http({
		url:"data.json",
	}).success(function(data){
			console.log(data);
			$scope.movie = data;
		})*/
		/*jsonp('https://api.douban.com/v2/movie/in_theaters', {
        count: 1,
        start: 0
    }, function(data) {
        console.log(data);
    })*/

	$movieServ.jsonp('https://api.douban.com/v2/movie/in_theaters', {
        count: 20,
        start: 0
    }, function(data) {
        $scope.movie = data;
        $scope.$apply();
    })
}])