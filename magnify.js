<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="zh-CN" xml:lang="zh-CN">
<head>
<title>放大缩小Div容器</title>
<style type="text/css">
*{margin:0;padding:0;}
body { padding:1em; }
h2 { font-size:2em; }
div { display:inline-block; width:10em; padding:.5em; margin-bottom:1em; overflow:hidden; background:#eee; text-align:center; font-size:1em; }
p#text { position:absolute; right:10px; top:10px; }
</style>
</head>
<body>
<p id="text"></p>
<div id="box1" onmouseover="pr_box('box1',150);" onmouseout="pr_box('box1',100);">
	<h2>标题</h2>
	<p>小容器</p>
</div>
<div id="box2" onmouseover="pr_box('box2',280);" onmouseout="pr_box('box2',100);">
	<h2>标题</h2>
	<p>大容器</p>
</div>
</body>
<script type="text/javascript">
function getDefaultStyle(obj,attribute){
    return obj.currentStyle?obj.currentStyle[attribute]:document.defaultView.getComputedStyle(obj,false)[attribute];
}
function pr_box(id,e){
	clearInterval(document.getElementById(id).maxmin);
	var obj=document.getElementById(id);
	var cfont=getDefaultStyle(obj,"fontSize");// 得到默认的大小:附单位
	var cp=cfont.replace(/[0-9]|[\.]/g,"");// 得到默认的单位
	var fsize=parseFloat(cfont);// 得到默认的大小数值
	var s=10;// 运动速度
	if(!obj.fsizeTmpe){// 存储默认大小数值
	obj.fsizeTmpe=fsize;
	}
	if(!objfont){// 如果没有设置当前大小，则赋予其默认大小
	obj.style.fontSize = cfont;
	}
	var e = obj.fsizeTmpe*e/100;// 需要改变到的大小数值
	var objfont = parseFloat(obj.style.fontSize);// 得到当前的大小
	if(e < obj.fsizeTmpe){obj.maxmin = setInterval(function(){pr_min(obj,e,cp)},s);}
	if(e > obj.fsizeTmpe){obj.maxmin = setInterval(function(){pr_max(obj,e,cp)},s);}
	if(e == obj.fsizeTmpe){
		if(objfont < obj.fsizeTmpe){
			obj.maxmin = setInterval(function(){pr_max(obj,obj.fsizeTmpe,cp)},s);
		}
		if(objfont > obj.fsizeTmpe){
			obj.maxmin = setInterval(function(){pr_min(obj,obj.fsizeTmpe,cp)},s);
		}
	}
}
function pr_max(obj,e,cp){
	if(!obj.fs){
		obj.fs=obj.style.fontSize;
	}
	var objfont=parseFloat(obj.fs);
	if(e > objfont){
	//document.getElementById("text").innerHTML+="放大 - 原始值："+objfont+" + 递增值："+e/10+"<br />";
		obj.fs = objfont+e/10+cp;
		obj.style.fontSize = obj.fs;
	}
	else if(e < objfont){
		obj.fs = e+cp;
		obj.style.fontSize = obj.fs;
	}
	else{clearInterval(obj.maxmin);}
}
function pr_min(obj,e,cp){
	if(!obj.fs){
		obj.fs=obj.style.fontSize;
	}
	var objfont=parseFloat(obj.fs);
	if(e < objfont){
	//document.getElementById("text").innerHTML+="缩小 - 原始值："+objfont+" - 递减值："+e/10+"<br />";
		obj.fs = objfont-e/10+cp;
		obj.style.fontSize = obj.fs;
	}
	else if(e > objfont){
		obj.fs = e+cp;
		obj.style.fontSize = obj.fs;
	}
	else{clearInterval(obj.maxmin);}
}
</script>
</html>