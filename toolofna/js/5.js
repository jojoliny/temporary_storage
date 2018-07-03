$(function(){
	//添加文字
	for(var i=0;i<10;i++){
		$(".span_1").append("<span>4</span>");
		$(".span_2").append("<span>9</span>");
		$(".span_3").append("<span>1</span>");
	}
	//文字掉落
	$(".span_1").animate({"top":0},1500);
	$(".span_2").animate({"top":0},1000);
	$(".span_3").animate({"top":0},500);
	//awards文字渐入
	$(".awards-header>h1").animate({"top":"-13px","opacity":1},750);
});