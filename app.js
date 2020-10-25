function selector(){
	var opt = document.getElementById("calcType").options[document.getElementById("calcType").selectedIndex].value;
	if (opt === "basic"){
		document.getElementById("calcFrame").src = "simpleCalc.html"
	}
	else if(opt === "scientific"){
		document.getElementById("calcFrame").src = "sciCalc.html"
	}
}