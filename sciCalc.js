alert('Please Note: There are some bugs in the scientific calculator. Bugs to fixed very soon!')
var arg = '';
var ans = '';
function display(code) {
	arg += code;
	if (code==1||code==2||code==3||code==4||code==5||
		code==6||code==7||code==8||code==9||code==0||
		code=='.'||code=='+'||code=='-'||code=='*'||
		code=='/'||code=='**'||code=='**2'||code=='**3'||
		code=='('||code==')'){
		document.getElementById("display-bar").value += code;
	}else if (code=='Math.sin('){
		document.getElementById("display-bar").value += "sin(";
	}else if (code=='Math.cos('){
		document.getElementById("display-bar").value += "cos(";
	}else if (code=='Math.tan('){
		document.getElementById("display-bar").value += "tan(";
	}else if (code=='Math.asin('){
		document.getElementById("display-bar").value += "asin(";
	}else if (code=='Math.acos('){
		document.getElementById("display-bar").value += "acos(";
	}else if (code=='Math.atan('){
		document.getElementById("display-bar").value += "atan(";
	}else if (code=='Math.abs('){
		document.getElementById("display-bar").value += "abs(";
	}else if (code=='Math.log('){
		document.getElementById("display-bar").value += "ln(";
	}else if (code=='*(10**'){
		document.getElementById("display-bar").value += "*(10**";
	}else if (code=='Math.PI'){
		document.getElementById("display-bar").value += "(22/7)"
	}else if (code=='Math.exp(') {
		document.getElementById("display-bar").value += "(e**"
	}else if (code=='sft'){
		callSft()
	}else if (code=='sftact'){
		callSftact()
	}else if (code=='**(1/2)'){
		document.getElementById("display-bar").value += "**(1/2)"
	}else if (code=='**(1/3)'){
		document.getElementById("display-bar").value += "**(1/3)"
	}else if (code=='Math.log10('){
		document.getElementById("display-bar").value += "log10("
	}
}
function clr(){
	cfr = confirm("Do you want to clear (y/n):");
	if (cfr==true){
		arg='';
		document.getElementById("display-bar").value = '';
	}
}
function del(){
	var bsp_arg = arg
	arg = bsp_arg.substring(0,bsp_arg.length-1)
	var bsp = document.getElementById("display-bar").value;
    document.getElementById("display-bar").value=bsp.substring(0,bsp.length-1);
}
function callSft() {
	$('#sin').attr("onclick","display('Math.asin(')")
	$('#sin').text("asin(x)")
	$('#cos').attr("onclick","display('Math.acos(')")
	$('#cos').text("acos(x)")
	$('#tan').attr("onclick","display('Math.atan(')")
	$('#tan').text("atan(x)")
	$('.sftKey').attr("onclick","display('sftact')")
	$('#ln').attr("onclick","display('Math.log10(')")
	$('#ln').html("log<sub>10</sub>(x)")
	$('#pow2').attr("onclick","display('**(1/2)')")
	$('#pow3').attr("onclick","display('**(1/3)')")
	$('#pow2').html("x<sup>1/2</sup>")
	$('#pow3').html("x<sup>1/3</sup>")
}
function callSftact() {
	$('#sin').attr("onclick","display('Math.sin(')")
	$('#sin').text("sin(x)")
	$('#cos').attr("onclick","display('Math.cos(')")
	$('#cos').text("cos(x)")
	$('#tan').attr("onclick","display('Math.tan(')")
	$('#tan').text("tan(x)")
	$('.sftKey').attr("onclick","display('sft')")
	$('#ln').attr("onclick","display('Math.log(')")
	$('#ln').text("ln(x)")
	$('#pow2').attr("onclick","display('**2')")
	$('#pow3').attr("onclick","display('**3')")
	$('#pow2').html("x<sup>2</sup>")
	$('#pow3').html("x<sup>3</sup")
}
function solve(){
	isok = false
	try{
		eval(arg)
	}catch{
		alert('Invalid Entry')
		arg=''
		document.getElementById("display-bar").value = '';
	}finally{
		q = String(eval(arg))
		document.getElementById("display-bar").value = q;
		arg = q
		ans = q
	}
}
function savelast(){
	document.getElementById("display-bar").value += ans;
}