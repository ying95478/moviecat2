//创建一个路由模块
angular.module("movieApp.route",["ngRoute"])
.config(["$routeProvider",function($routeProvider){
	//配置路由
	$routeProvider.when("/",{
		templateUrl : "tmps/index-tmp.html"
	})
	.when("/later",{
		templateUrl : "tmps/later-tmp.html",
		controller : "laterCtrl"
	})
	.when("/top250",{
		templateUrl : "tmps/Top250-tmp.html",
		controller : "Top250Ctrl"
	})
	.when("/nowplaying",{
		templateUrl : "tmps/nowplaying-tmp.html",
		controller : "nowplayingCtrl"
	})
}])