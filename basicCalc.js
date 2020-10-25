function keyId(key){
	document.getElementById('calcDisp').value+=key;
}
function clr(){
	document.getElementById('calcDisp').value=''
}
function calc(){
	x = document.getElementById('calcDisp').value
	y=eval(x)
	document.getElementById('calcDisp').value=y
}