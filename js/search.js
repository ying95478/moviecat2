angular.module("movieApp.searchCtrl",[])
.controller("searchCtrl",["$scope","$routeParams","$movieServ",function($scope,$routeParams,$movieServ){
	/*$scope.movie = "";
	$movieServ.jsonp("https://api.douban.com/v2/movie/search",
	{
		q:$routeParams.searchName
	},function(data){
		console.log(data);
		$scope.movie = data;
		$scope.$apply();
	})
*/  $scope.searchName = $routeParams.searchName;
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
    $scope.isLoading = false;
    $routeParams.pageid = $routeParams.pageid || 1;
    $scope.pageid = $routeParams.pageid;
    var start = ($routeParams.pageid-1)*5
	$movieServ.jsonp('https://api.douban.com/v2/movie/search', {
		q: $routeParams.searchName,
        count: 5,
        start: start
    }, function(data) {
        console.log(data);
    	$scope.prePage = $routeParams.pageid-1;
    	$scope.newxPage = ($routeParams.pageid-0)+1;
    	if($routeParams.pageid ==1){
    		$scope.prePage = $routeParams.pageid;
    	}
    	//计算总页数
    	$scope.pageCount = Math.ceil(data.total/5);
    	if($routeParams.pageid == $scope.pageCount){
    		$routeParams.pageid = $scope.pageCount
    	}
    	//暴露一个总条数
    	$scope.pageTotal = data.total;
    	$scope.isLoading = true;
    	//暴露一个当前条数
        $scope.movie = data;
        console.log(data);
        $scope.$apply();
    });
}])