function $(value){var v=value.substr(1,value.length);if(value.indexOf(".")===0){return document.getElementsByClassName(v);}else if(value.indexOf("#")===0){return document.getElementById(v);}else{return document.getElementsByTagName(value);}}
//导入页面
function importHTML(strNode){
	var link=document.querySelector("link[rel=import]");
	var content=link.import;//获取nav页面的文档流
	var el=content.querySelector(".nav");
	document.body.appendChild(el.cloneNode(true));
}
