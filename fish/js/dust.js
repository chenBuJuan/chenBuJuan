
var dust = function () {
	
	this.x = [];
	this.y = [];
	this.img = [];
	this.v;
	this.ran=[];
	
};

dust.prototype.init = function () {
	
	for(var i = 0; i < 30; i++){
		
		this.x[i] = Math.random() * canWidth;
		this.y[i] = Math.random() * canHeight;
		
		this.img[i] = new Image();
		this.img[i].src = './src/dust'+i%7+'.png';
		
		this.v = 0;
		this.ran[i] = 10 + Math.random();
		
	}
	
};

dust.prototype.draw = function () {
	
	this.v+=Math.PI*0.005;
	
	for(var i = 0;i < 30;i++){
		
		var x = this.x[i]+Math.sin(this.v)*this.ran[i];
		ctx2.drawImage(this.img[i],x,this.y[i]);
		
	}
	
};