$(function(){
	setTimeout(function(){
		$(".line-center").css("width","1px");
		$(".line-center-fill").css("background-color","lightgrey");
		$("#bg-line-left,#bg-line-right").animate({
			width:0,
			left:"50%"
		},500);
		$("#directors-category-left,#directors-category-right").fadeIn(700);
	},500);
	//显示文字

	$("#directors-category-right").hover(
		function(){
			$("#bg-line-right").stop(true,false).animate({
			width:"65%",
			left:"50%"
			},500);
			$("#directors-category-right").css("color","white");
			$("#directors-category-right h1").animate({"color":"white"},5000);
			
//			setTimeout(function(){
//				$("#directors-category-right").css("color","white");
//			},400);
		},
		function(){
			$("#bg-line-right").stop(true,false).animate({
			width:"0",
			left:"50%"
			},300);
			$("#directors-category-right").css("color","black");
//			setTimeout(function(){
//				$("#directors-category-right").css("color","black");
//			},300);
		}
	);
	$("#directors-category-left").hover(
		function(){
			$("#bg-line-left").stop(true,false).animate({
			width:"65%",
			left:"-15%",
			},500);
			$("#directors-category-left").css("color","white");
			
//			setTimeout(function(){
//				$("#directors-category-left").css("color","white");
//			},400);
		},
		function(){
			$("#bg-line-left").stop(true,false).animate({
			width:"0",
			left:"50%",
			},300).delay(300);
			$("#directors-category-left").css("color","black");
			
//			setTimeout(function(){
//				$("#directors-category-left").css("color","black");
//			},300);
		}
	);

});