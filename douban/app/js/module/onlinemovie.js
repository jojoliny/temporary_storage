(function(angular){
    var app=angular.module("movie.module.online",["ngRoute","movieApp.service.getmovies"]);
    app.config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when("/:item/:page",{
            controller:"onlineCtrl",
            templateUrl:"./views/listview.html"
            })
    }]);
    app.controller("onlineCtrl",["$scope","$routeParams","$route","movielist",function ($scope,$routeParams,$route,movielist) {
        movielist.jsonp("https://api.douban.com/v2/movie/in_theaters",10,$routeParams.page,function(datalist,title,total){
            $scope.title=title;
            $scope.movielist=datalist;
            $scope.totalpage=Math.ceil(total/10);
            $scope.$apply();
        });
        $scope.pre=function(){
            if($routeParams.page<=1) return;
            var current = $routeParams.page-1;
            $route.updateParams({page:current});
        }
        $scope.next=function(){
            if($routeParams.page>=$scope.totalpage) return;
            var current =parseInt($routeParams.page) + 1;
            console.log("current "+current);
            $route.updateParams({page:current});
        }
        $scope.skip=function(id){
            // console.log("sssssssss"+$scope.movielist[0].id)
            $route.updateParams({page:$routeParams.page+"/"+id})
        }
    }])
})(angular)