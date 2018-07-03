(function (angular) {
    var app=angular.module("movieApp",["ngRoute","movie.module.online","movie.module.detail"]);
    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.otherwise({
            controller:"myCtrl",
            redirectTo:"/online/1"
    })
    }]);
    app.controller("myCtrl",["$scope",function($scope){
        console.log("movieApp")
    }])
})(angular)