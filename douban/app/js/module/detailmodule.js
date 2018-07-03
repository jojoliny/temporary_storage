(function (angular) {
    var app=angular.module("movie.module.detail",["ngRoute"]);
    app.config(["$routeProvider",function ($routeProvider) {
        $routeProvider.when("/:item/:page/:id",{
            controller:"detailCtrl",
            templateUrl:"./views/detail.html"
        })
    }]);
    app.controller("detailCtrl",["$scope",function($scope){
        console.log("detailApp")
    }])
})(angular)