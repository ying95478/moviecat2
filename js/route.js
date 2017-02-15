//创建一个路由模块
angular.module("movieApp.route",["ngRoute"])
.config(["$routeProvider",function($routeProvider){
	//配置路由
	$routeProvider.when("/",{
		templateUrl : "tmps/index-tmp.html"
	})
	.when("/later/:pageid?",{
		templateUrl : "tmps/later-tmp.html",
		controller : "laterCtrl"
	})
	.when("/top250/:pageid?",{
		templateUrl : "tmps/Top250-tmp.html",
		controller : "Top250Ctrl"
	})
	.when("/nowplaying/:pageid?",{
		templateUrl : "tmps/nowplaying-tmp.html",
		controller : "nowplayingCtrl"
	})
	.when("/details/:id?",{
		templateUrl : "tmps/details-tmp.html",
		controller : "detailsCtrl"
	}).when("/search/:searchName?/:pageid?",{
		templateUrl : "tmps/search-tmp.html",
		controller : "searchCtrl"
	})

}])