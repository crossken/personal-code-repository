function getStyle(obj,stylename) {
	if (obj.currentStyle) {
		return obj.currentStyle(stylename);
	} else {
		return window.getComputedStyle(obj,false)[stylename];
	}
}
function move (obj,attr,target) {
	clearInterval(obj.timer);
	var cur = 0;
	var speed = 0;
	obj.timer = setInterval(function(){
		if (attr == 'opacity') {
			cur = Math.round(parseFloat(getStyle(obj,'opacity'))*100)
		} else {
			cur = parseInt(getStyle(obj,attr));
		}
		if (cur == target) {
			clearInterval(obj.timer);
			return true;
		}
		if (cur < target) {
			speed = 1;
		}
		if (cur > target) {
			speed = -1;
		}
		if (attr=='opacity') {
			obj.style.filter='alpha(opacity:'+(cur+speed)+')';
			obj.style.opacity=(cur+speed)/100;
		}
		else {
			obj.style[attr]=cur+speed+'px';
		}
	},5)
}