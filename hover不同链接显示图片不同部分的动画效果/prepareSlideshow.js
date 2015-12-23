function prepareSlideshow() {
	//取得要移动的图片元素
	var img = document.getElementById("preview");
	//取得目标链接的集合
	var list = document.getElementById("linklist");
	var links = list.getElementsByTagName("a");
	//为每个链接分别绑定onmouseover事件
	links[0].onmouseover = function(){
		moveElement("preview",-100,0,5);
	}
	links[1].onmouseover = function(){
		moveElement("preview",-200,0,5);
	}
	links[2].onmouseover = function(){
		moveElement("preview",-300,0,5);
	}
	//为所有链接绑定onmouseout事件
	for (var i = 0; i < links.length; i++) {
		links[i].onmouseout = function() {
			moveElement("preview",0,0,5);
		}
	}
}

function moveElement(elementID,final_x,final_y,delayTime) {
	//通过id取得需要移动的元素
	var elem = document.getElementById(elementID);
	//若该元素的movement属性存在（即正在运动中），则清除已有的运动序列。
	if (elem.movement) {
		clearTimeout(elem.movement);
	}
	//取得元素的当前横轴和纵轴位置的数值
	var xpos = elem.offsetLeft
	var ypos = elem.offsetTop;
	//若元素已到达指定位置，则退出函数
	if ((xpos == final_x) && (ypos == final_y)) {
		return true;
	}
	//根据元素当前位置数值得到需进行移动的数值
	if (xpos < final_x) {
		xpos++;
	}
	if (xpos > final_x) {
		xpos--;
	}
	if (ypos < final_y) {
		ypos++;
	}
	if (ypos > final_y) {
		ypos++;
	}
	//根据数值移动元素
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	//重复
	elem.movement = setTimeout("moveElement('"+elementID+"',"+final_x+","+final_y+","+delayTime+")",delayTime);
}
window.onload = prepareSlideshow;