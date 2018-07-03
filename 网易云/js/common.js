function $(attr){
	if(attr.indexOf("#")==0){
		return document.getElementById(attr.substring(1,attr.length));
	}else if(attr.indexOf(".")==0){
		attr = attr.substring(1,attr.length)
		return document.getElementsByClassName(attr);
	}else{
		return document.getElementsByTagName(attr);
	}
}
