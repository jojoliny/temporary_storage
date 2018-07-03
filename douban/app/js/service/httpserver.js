(function (angular) {
    var app=angular.module("movie.httpserver",[]);
    app.service("jsonoption",function () {
        this.fun_jsonp=function(url,params,callback){
            params=params?params:{};
            var funName="fun"+Math.random().toString().replace(".","");
            console.log(funName)
            window[funName]=callback;
            var config="";
            for(var key in params){
                config+=key+"="+params[key]+"&";
            }
            url=url+"?"+config+"callback="+funName;
            script=document.createElement("script");
            script.src=url;
            document.head.appendChild(script);
        }
    });
})(angular)