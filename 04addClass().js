function addClass (elem,classname) {
	var old_name = elem.className;
	if (!old_name) {
		elem.className = classname;
	} else {
		elem.className = old_name + ' ' + classname;
	}
}