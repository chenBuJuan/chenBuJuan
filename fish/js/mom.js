var momObj=function(){
	
	this.x;
	this.y;
	this.angel;
	
	this.bigEye=[];
	this.bigEyeTimer;
	this.bigEyeCount;
	this.bigEyeTimerMonitor;
	
	this.bigBody=[];
	this.bigBodyCount;
	
	this.bigTail=[];
	this.bigTailTimer;
	this.bigTailCount;
	
}
momObj.prototype.init=function(){
	
	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
	this.angel=0;
	
	for(var i=0;i<2;i++){
		this.bigEye[i]=new Image();
		this.bigEye[i].src='./src/bigEye'+i+'.png';
	}
	this.bigEyeTimer=0;
	this.bigEyeTimerMonitor=0;
	this.bigEyeCount=0;
	
	for(var i=0;i<8;i++){
		this.bigBody[i]=new Image();
		this.bigBody[i].src='./src/bigSwim'+i+'.png';
	}
	for(var i=8;i<16;i++){
		this.bigBody[i]=new Image();
		this.bigBody[i].src='./src/bigSwimBlue'+(i-8)+'.png';
	}
	this.bigBodyCount=0;
	
	for(var i=0;i<8;i++){
		this.bigTail[i]=new Image();
		this.bigTail[i].src='./src/bigTail'+i+'.png';
	}
	this.bigTailTimer=0;
	this.bigTailCount=0;
	
}
momObj.prototype.draw=function(){
	
	var deltaX=mx-this.x;
	var deltaY=my-this.y;
	
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;
	this.angel=lerpAngle(beta,this.angel,0.9);
	
	this.bigEyeTimer+=deltaTime;
	if(this.bigEyeTimer>this.bigEyeTimerMonitor){
		this.bigEyeCount=(this.bigEyeCount+1)%2;
		if(this.bigEyeCount==0){
			this.bigEyeTimerMonitor=Math.random()*2000+1000;
		}else{
			this.bigEyeTimerMonitor=300;
		}
		this.bigEyeTimer%=this.bigEyeTimerMonitor;
	}
	var bigEyeCount=this.bigEyeCount;
	
	var bigBodyCount=this.bigBodyCount;
	
	this.bigTailTimer+=deltaTime;
	if(this.bigTailTimer>300){
		this.bigTailCount=(this.bigTailCount+1)%8;
		this.bigTailTimer%=300;
	}
	var bigTailCount=this.bigTailCount;
	
	ctx1.save();
	this.x=lerpDistance(mx,this.x,0.95);
	this.y=lerpDistance(my,this.y,0.95);
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angel);
	ctx1.drawImage(this.bigTail[bigTailCount],-this.bigTail[bigTailCount].width*0.5+30,-this.bigTail[bigTailCount].height*0.5);
	ctx1.drawImage(this.bigBody[bigBodyCount],-this.bigBody[bigBodyCount].width*0.5,-this.bigBody[bigBodyCount].height*0.5);
	ctx1.drawImage(this.bigEye[bigEyeCount],-this.bigEye[bigEyeCount].width*0.5,-this.bigEye[bigEyeCount].height*0.5);
	ctx1.restore();
}