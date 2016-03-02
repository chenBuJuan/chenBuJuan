var fruitObj = function(){
	this.alive=[];
	this.x=[];
	this.y=[];
	this.l=[];
	this.spd=[];
	this.fruitType=[];
	this.orange=new Image();
	this.blue=new Image();
}
fruitObj.prototype.num=30;
fruitObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.alive[i]=true;
		this.x[i]=0;
		this.y[i]=0;
		this.spd[i]=Math.random()*0.047+0.006;
		this.fruitType[i]='';
	}
	
	this.orange.src='./src/fruit.png';
	this.blue.src='./src/blue.png';
}
fruitObj.prototype.born=function(i){
	var aneId=Math.floor(Math.random()*ane.num);
	this.x[i]=ane.headx[aneId];
	this.y[i]=canHeight-ane.heady[aneId];
	this.l[i]=0;
	this.alive[i]=true;
	if(Math.random()<0.2){
		this.fruitType[i]='blue';
	}
	else{
		this.fruitType[i]='orange';
	}
}
fruitObj.prototype.dead=function(i){
	this.alive[i]=false;
}
fruitObj.prototype.draw=function(){
	for(var i=0;i<this.num;i++){
		if(this.fruitType[i]=='blue'){
			var pic=this.blue;
		}
		else{
			var pic=this.orange;
		}
		if(this.alive[i]){
			if(this.l[i]<=12){
				this.l[i]+=this.spd[i]*deltaTime;
			}
			else{
				this.y[i]-=this.spd[i]*deltaTime;
			}
			ctx2.drawImage(pic,this.x[i]-0.5*this.l[i],this.y[i]-0.5*this.l[i],this.l[i],this.l[i]);
			if(this.y[i]<0){
				this.alive[i]=false;
			}
		}
	}
}
function fruitMonitor(){
	var num=0;
	for(var i=0;i<fruit.num;i++){
		if(fruit.alive[i]){
			num++;
		}
	}
	if(num<15){
		sendFruit();
		return;
	}
}
function sendFruit(){
	for(var i=0;i<fruit.num;i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	}
}