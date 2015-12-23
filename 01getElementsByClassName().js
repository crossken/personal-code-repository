// function getElementsByClassName (node,classname) {
// 	if (node.getElementsByClassName) {
// 		return node.getElementsByClassName(classname);
// 	} else {
// 		var elems = node.getElementsByTagName("*");
// 		var result = [];
// 		for (var i = 0; i < elems.length; i++) {
// 			if (elems[i].className.indexOf(classname) != -1) {
// 				result.push(elems[i]);
// 			}
// 		}
// 		return result;
// 	}
// }

function getElementsByClassName(node,classname) {
	if (node.getElementsByClassName) {
		return node.getElementsByClassName(classname);
	} else {
		var results = [];
		var elems = node.getElementsByTagName('*');
		if (!elems.length) return false;
		for (var i = 0; i < elems.length; i++) {
			if(!elems[i].className) continue;
			var names = elems[i].className.split(' ');
			for (var j = 0; j < names.length; j++) {
				if (names[j] == classname) {
					results.push(elems[i]);
					break;
				}
			}
		}
		return results;
	}
}