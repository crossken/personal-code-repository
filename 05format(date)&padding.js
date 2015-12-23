// 此函数用于获取标准格式的时间字符串
function padding(number) {
	return number < 10 ? "0" + number : "" + number;  //注意多使用switch
}
function format(date) {
	return date.getFullYear() + "-" + padding(date.getMonth() + 1) + "-" + padding(date.getDate()) + " "  //年月日之间用 - 连接
	+ padding(date.getHours()) + ":" + padding(date.getMinutes()) + ":" + padding(date.getSeconds());   //getFullYear 不要用getYear //getDate 不要用getDay
}
var nowDate  = new Date();

alert(format(nowDate));