function addLoadEvent (func) {
	var old_load = window.onload; //由于window.onload在if...else语句两处地方都要使用，所以先将其赋值给变量old_load。
	if (typeof old_load != 'function') {
		window.onload = func;
	} else {
		window.onload = function () {
			old_load();
			func();
		}
	}
}