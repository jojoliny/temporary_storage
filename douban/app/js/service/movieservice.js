(function(angular){
    app=angular.module("movieApp.service.getmovies",["movie.httpserver"]);
    app.service("movielist",["jsonoption",function(jsonoption){
        this.jsonp=function(url,count,current,callback){
            jsonoption.fun_jsonp(url,{"count":count,"start":count*(current-1)},function(json){
                console.log(json);
                callback(json.subjects,json.title,json.total);

            });
        }
    }]);
})(angular)