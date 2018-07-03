$(function(){
	var wheel_distance=0;
	//滑块宽度
	var bar_width=$("body").width()/$("#work").width()*100;
	if(bar_width<100){
		$(".scroller").css("width",bar_width+"%");
	}else{
		$(".scrollbar-fixed").css("display","none");
	}
	$(".scroller").on("mousedown",function(event){
		var offsetX=event.offsetX;
		$(document).on({
			"mousemove":function(event){
				event.preventDefault();
				var clientX=event.clientX;
				var lf=clientX-offsetX;
				if(lf<=0){
					lf=0;
				}
				if(lf>$(".scrollbar").width()-$(".scroller").width()){
					lf=$(".scrollbar").width()-$(".scroller").width();
				}
				//不能用offset
				$(".scroller").css({"left":lf+"px"});
				//滚动
				var val=$("#work ul").width()*lf/$(".scrollbar").width();
//				$("html,body").animate({"scrollLeft": val}, 200); 	
				window.scrollTo(val, 0);
				console.log("lf "+lf);
				//为滚轮事件作准备
				if($(".scroller").scrollLeft()>0){
					wheel_distance=$(".scroller").scrollLeft();
				}
			},
			"mouseup":function(event){
				//移除所有事件
				$(document).off();
				event.stopPropagation(); 
				console.log("scrollLeft "+$(".scroller").scrollLeft());
				
			}
		});
	});
	//鼠标滚轮
//	$('#mouseWheel').on("scroll",function(event){
//		event.preventDefault();
//		console.log("滚了滚了");
//	});


	var scroller_diatance=0;
	var difference=$("#work ul").width()-$("body").width();
	window.onmousewheel=function(e){
//		console.log("offsetLeft "+$(document).());
		
		e=e||window.event;
		e.preventDefault();
		wheel_distance+=-(e.wheelDelta);

		if(wheel_distance<0){
			wheel_distance=0;
		}
		if(wheel_distance>difference){
			wheel_distance=difference;
		}
		$("html,body").animate({"scrollLeft": wheel_distance}, 50); 
		// 滚动条位置%=滚轮位置/可移动总长
		scroller_diatance=wheel_distance/difference*($(".scrollbar").width()-$(".scroller").width());
		console.log(scroller_diatance+"="+wheel_distance+"/"+difference);
		$(".scroller").animate({"left":scroller_diatance+"px"},50);
	}
});
