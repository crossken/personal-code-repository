function insertAfter (newNode,existingNode) {
	var parent = existingNode.parentNode;
	if (parent.lastChild === existingNode) {
		parent.appendChild(newNode);
	} else {
		parent.insertBefore(newNode,existingNode.nextSibling);
	}
	return newNode;
}