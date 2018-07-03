window.onload=function(){
	Music.bt_play=$("#play");
	Music.totalbar=$("#totalbar");
	Music.currentbar=$("#currentbar");
	Music.audio=$("#audio");
	Music.total_time=$("#total_time");
	Music.total_time.innerHTML=parseInt(Music.audio.duration/60)+":"+parseInt(Music.audio.duration%60);
	Music.current_time=$("#current_time");
	Music.bt_play.stop=true;
	Music.bt_play.pause=true;
	//
	Music.bt_play.onclick=Music.play;
	Music.totalbar.onclick=Music.click;
	//
	Music.ctr_type=$("#ctr_type");
	Music.count=0;
	ctr_type.onclick=Music.type;
}
var Music={
	play:function(){
		if(this.pause){
			Music.audio.play();
			this.style.backgroundPosition="0 -165px";
		}
		else{
			Music.audio.pause();
			this.style.backgroundPosition="0 -204px";
		}
		this.pause=!this.pause;
		Music.progress();
	},
	progress:function(){
		Music.timer=setInterval(function(){
			//当前播放时间
			Music.current_time.innerHTML=parseInt(Music.audio.currentTime/60)+":"+parseInt(Music.audio.currentTime%60);
			Music.currentbar.style.width=(Music.audio.currentTime/Music.audio.duration)*100+"%";
			//播放完毕，清除定时器
			if(Music.audio.ended){
				clearInterval(Music.timer);

				Music.currentbar.style.width=0+"%";
				Music.audio.currentTime=0;
				
			}
		},500);
	},
	click:function(event){
		event=event||window.event;
		//获取点击位置
		var x=event.offsetX;
		var ct=x/Music.totalbar.offsetWidth;
		console.log(x);
		//设置音乐播放点
		Music.audio.currentTime=(x/Music.totalbar.offsetWidth)*Music.audio.duration;
		//设置音乐播放条长度
		Music.currentbar.style.width=ct*100+"%";
		console.log(Music.audio.currentTime);
	},
	type:function(){
		++Music.count;
		if(Music.count%3==0){
			this.style.backgroundPosition="-3px -342px";
			this.onmouseover=function(){
				this.style.backgroundPosition="-33px -342px";
			}
			this.onmouseout=function(){
				this.style.backgroundPosition="-3px -342px";
			}
		}
		else if(Music.count%3==1){
			this.style.backgroundPosition="-66px -342px";
			this.onmouseover=function(){
				this.style.backgroundPosition="-93px -342px";
			}
			this.onmouseout=function(){
				this.style.backgroundPosition="-66px -342px";
			}
			Music.audio.loop=true;
		}
		else if(Music.count%3==2){
			this.style.backgroundPosition="-66px -246px";
			this.onmouseover=function(){
				this.style.backgroundPosition="-93px -246px";
			}
			this.onmouseout=function(){
				this.style.backgroundPosition="-66px -246px";
			}
		}
	}
	
}
