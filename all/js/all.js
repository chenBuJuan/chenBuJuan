
var oBan = document.getElementById('banner');
var oImg = oBan.getElementsByTagName('img');
var Left = document.getElementById('left');
var Right = document.getElementById('right');
var Z = 1;
var count = 0;

window.onload = function () {
	
	setInterval(refrash,3000);
	
};

function refrash () {
		
	oImg[count].style.zIndex = Z + '';
	Z++;
	count++;
	if(count>=oImg.length){
		count = 0;
	}
	
}

function next () {
	
	oImg[count].style.zIndex = Z + '';
	Z++;
	count++;
	if(count>=oImg.length){
		count = 0;
	}
	
}

function previous () {
	
	if(count-2 == -1){
		count = 2;
	}
	
	else if(count-2 == 0){
		count = 0;
	}
	
	else if(count-2 == -2){
		count = 1;
	}
	
	oImg[count].style.zIndex = Z + '';
	Z++;
	count++;
	
	if(count>=oImg.length){
		count = 0;
	}
	
}

Left.addEventListener('click',previous,false);
Right.addEventListener('click',next,false);