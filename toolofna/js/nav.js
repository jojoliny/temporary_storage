window.onload=function(){
	var lis=document.querySelectorAll(".nav li");
	if(window.chose!=null){
		$(".hover-change").get(window.chose).classList.add("transform_-90deg");
		$(".hover-change>div:odd>span").get(window.chose).classList.add("bg-red");
	}
	$(".nav li").on("click",function(){
		window.location=($(this).index()+1)+".html";
	});
}
