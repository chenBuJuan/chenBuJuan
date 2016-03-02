var aneObj = function(){
	this.footx=[];
	this.headx=[];
	this.heady=[];
	this.v;
	this.ran=[];
}
aneObj.prototype.num=50;
aneObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.headx[i]=this.footx[i]=i*16+Math.random()*20;
		this.heady[i]=170+Math.random()*100;
		this.ran[i]=10+Math.random()*10;
		this.v=0;
	}
};
aneObj.prototype.draw=function(){
	ctx2.save();
	ctx2.globalAlpha=0.7;
	this.v+=Math.PI*0.005;
	for(var i=0;i<this.num;i++){
		this.headx[i]=this.footx[i]+Math.sin(this.v)*this.ran[i];
		ctx2.beginPath();
		ctx2.moveTo(this.footx[i],canHeight);
		ctx2.quadraticCurveTo(this.footx[i],canHeight-100,this.headx[i],canHeight-this.heady[i]);
		ctx2.strokeStyle='#3b154e';
		ctx2.lineWidth=20;
		ctx2.lineCap='round';
		ctx2.stroke();
	}
	ctx2.restore();
};