var babyObj=function(){
	this.x;
	this.y;
	this.angel;
	
	this.babyEye=[];
	this.babyEyeTimer;
	this.babyEyeCount;
	this.babyEyeTimerMonitor;
	
	this.babyBody=[];
	this.babyBodyTimer;
	this.babyBodyCount;
	
	this.babyTail=[];
	this.babyTailTimer;
	this.babyTailCount;
	
}
babyObj.prototype.init=function(){
	
	this.x=canWidth*0.5-50;
	this.y=canHeight*0.5+50;
	this.angel=0;
	
	for(var i=0;i<2;i++){
		this.babyEye[i]=new Image();
		this.babyEye[i].src='./src/babyEye'+i+'.png';
	}
	this.babyEyeTimer=0;
	this.babyEyeTimerMonitor=0;
	this.babyEyeCount=0;
	
	for(var i=0;i<20;i++){
		this.babyBody[i]=new Image();
		this.babyBody[i].src='./src/babyFade'+i+'.png';
	}
	this.babyBodyTimer=0;
	this.babyBodyCount=0;
	
	for(var i=0;i<8;i++){
		this.babyTail[i]=new Image();
		this.babyTail[i].src='./src/babyTail'+i+'.png';
	}
	this.babyTailTimer=0;
	this.babyTailCount=0;
	
}
babyObj.prototype.draw=function(){
	this.x=lerpDistance(mom.x,this.x,0.98);
	this.y=lerpDistance(mom.y,this.y,0.98);
	var deltaX=mom.x-this.x;
	var deltaY=mom.y-this.y;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;
	this.angel=lerpAngle(beta,this.angel,0.9);
	
	this.babyEyeTimer+=deltaTime;
	if(this.babyEyeTimer>this.babyEyeTimerMonitor){
		this.babyEyeCount=(this.babyEyeCount+1)%2;
		if(this.babyEyeCount==0){
			this.babyEyeTimerMonitor=Math.random()*2000+1000;
		}else{
			this.babyEyeTimerMonitor=300;
		}
		this.babyEyeTimer%=this.babyEyeTimerMonitor;
	}
	var babyEyeCount=this.babyEyeCount;
	
	this.babyBodyTimer+=deltaTime;
	if(this.babyBodyTimer>300){
		this.babyBodyCount=this.babyBodyCount+1;
		if(this.babyBodyCount>19){
			this.babyBodyCount=19;
			GAME=false;
		}
		this.babyBodyTimer%=300;
	}
	var babyBodyCount=this.babyBodyCount;
	
	this.babyTailTimer+=deltaTime;
	if(this.babyTailTimer>300){
		this.babyTailCount=(this.babyTailCount+1)%8;
		this.babyTailTimer%=300;
	}
	var babyTailCount=this.babyTailCount;
	
	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angel);
	ctx1.drawImage(this.babyTail[babyTailCount],-this.babyTail[babyTailCount].width*0.5+23,-this.babyTail[babyTailCount].height*0.5);
	ctx1.drawImage(this.babyBody[babyBodyCount],-this.babyBody[babyBodyCount].width*0.5,-this.babyBody[babyBodyCount].height*0.5);
	ctx1.drawImage(this.babyEye[babyEyeCount],-this.babyEye[babyEyeCount].width*0.5,-this.babyEye[babyEyeCount].height*0.5);
	ctx1.restore();
}