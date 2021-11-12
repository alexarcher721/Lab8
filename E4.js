function val(){
	bred=document.getElementById("bred").value;
	bblue=document.getElementById("bblue").value;
	bgreen=document.getElementById("bgreen").value;
	bwidth=document.getElementById("bwidth").value;
	bgred=document.getElementById("bgred").value;
	bgblue=document.getElementById("bgblue").value;
	bggreen=document.getElementById("bggreen").value;
	document.body.style.backgroundColor = 'rgb(' + bgred + ',' + bggreen + ',' + bgblue + ')';
	document.body.style.borderColor = 'rgb(' + bred + ',' + bgreen + ',' + bblue + ')';
	document.body.style.borderWidth= bwidth;
}
