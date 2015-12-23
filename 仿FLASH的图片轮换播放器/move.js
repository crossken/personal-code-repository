function getStyle(obj, name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj, false)[name];
	}
}

function getByClass(node,classname) {
	if (node.getElementsByClassName) {
		return node.getElementsByClassName(classname);
	} else {
		var result = [];
		var elems = node.getElementsByTagName('*');
		for (var i = 0; i < elems.length; i++) {
			if (elems[i].className == classname) {
				result.push(elems[i]);
			}
		}
		return result;
	}
}

function startMove(obj, attr, iTarget)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var cur=0;
		
		if(attr=='opacity')
		{
			cur=Math.round(parseFloat(getStyle(obj, attr))*100);
		}
		else
		{
			cur=parseInt(getStyle(obj, attr));
		}
		
		var speed=(iTarget-cur)/6;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		
		if(cur==iTarget)
		{
			clearInterval(obj.timer);
		}
		else
		{
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
				
			}
			else
			{
				obj.style[attr]=cur+speed+'px';
			}
		}
	}, 30);
}