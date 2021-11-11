var index=1;
var slides = document.getElementsByTagName('img');
for (i = 1; i < slides.length;i++ ) {
    slides[i].style.display = "none";
}
function Slider(x){
	slides[index-1].style.display = "none";
	index=index+x;
	if(index > slides.length){
	index=1;
	}
	if(index < 1){
	index=slides.length;
	}
	slides[index-1].style.display = "block";
}

