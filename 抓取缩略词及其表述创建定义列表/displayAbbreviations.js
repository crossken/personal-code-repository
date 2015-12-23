function displayAbbreviations() {
	var Abbreviations = document.getElementsByTagName("abbr");
	if (Abbreviations.length < 1) return false; //这里的判断条件可以简写成 if (!Abbreviations.length)
	var defs = [];
	for (var i = 0; i < Abbreviations.length; i++) {
		var key = Abbreviations[i].firstChild.nodeValue; //这里用的是DOM操作的标准方法，但在web环境下可以直接使用innerHTML
		var definition = Abbreviations[i].getAttribute("title");
		defs[key] = definition;
	}
	var dlist = document.createElement("dl");
	for (key in defs) { //判断条件要加上括号，in defs 要放在括号里面；
		var definition = defs[key];
		var dtitle = document.createElement("dt");
		var ddescription = document.createElement("dd");
		var dtitle_text = document.createTextNode(key);
		var ddescription_text = document.createTextNode(definition);
		dtitle.appendChild(dtitle_text);
		ddescription.appendChild(ddescription_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddescription);
	}
	document.getElementsByTagName('body')[0].appendChild(dlist);
}

window.onload = function() {
	displayAbbreviations();
	displayCitations();
}

function displayCitations() {
	var quotes = document.getElementsByTagName("blockquote");
	if (quotes.length < 1) return false;
	for (var i = 0; i < quotes.length; i++) {
		var link = document.createElement("a");
		var src = document.createTextNode("Source");
		link.appendChild(src);
		link.href = quotes[i].getAttribute("cite");
		var para = quotes[i].getElementsByTagName("p");
		para[0].appendChild(link);
	}
}


// jQuery

	// $(function() {
	// 	displayAbbr();
	// 	displaySrc();
	// });
	// function displayAbbr () {
	// 	var $dlist = $('<dl></dl>');
	// 	$('abbr').each(function(index, el) {
	// 		$('<dt>'+ el.innerHTML + '</dt><dd>' + el.title + '</dd>').appendTo($dlist);
	// 	});
	// 	$dlist.appendTo('body');
	// }
	// function displaySrc () {
	// 	$('blockquote').each(function(index, el) {
	// 		$('<a></a>').html('Source')
	// 					.attr('href', $(el).attr('cite'))
	// 					.appendTo($(el).find('p:last-child'));
	// 	});
		
	// }