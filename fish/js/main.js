
window.onload=beginGame;

var GAME;
var Galpha;

var can1,can2;

var canWidth,canHeight;

var ctx1,ctx2;

var lastTime,deltaTime;

var bgPic;
var BGtime;

var ane;
var fruit;
var mom;
var baby;

var mx,my;

var score;

var dust;

function game(){
	init();
	lastTime=Date.now();
	deltaTime=0;
	gameloop();
}

function init(){
	
	GAME=true;
	Galpha=0;
	
	can1.addEventListener('mousemove',onMouseMove,false);
	
	bgPic=new Image();
	bgPic.src="./src/background.jpg";
	
	ane=new aneObj();
	ane.init();
	
	fruit=new fruitObj();
	fruit.init();
	
	mom=new momObj();
	mom.init();
	
	mx=canWidth*0.5;
	my=canHeight*0.5;
	
	baby=new babyObj();
	baby.init();
	
	score=new Score();
	score.init();
	
	dust = new dust();
	dust.init();
	
}

function gameloop(){
	
	window.requestAnimFrame(gameloop);
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	if(deltaTime>50){
		deltaTime=50;
	}
	
	ctx1.clearRect(0,0,canWidth,canHeight);
	ctx2.clearRect(0,0,canWidth,canHeight);
	
	drawBackground();
	
	if(!GAME){
		
		can1.removeEventListener('mousemove',onMouseMove,false);
		gameover();
		
	}
	
	ane.draw();
	
	fruitMonitor()
	fruit.draw();
	
	momFruitsCollision();
	
	momBabyCollision();
	
	mom.draw();
	
	baby.draw();
	
	score.draw();
	
	dust.draw();
}

function onMouseMove(e){
	if(e.offsetX||e.layerX){
		mx=e.offsetX==undefined?e.layerX:e.offsetX;
		my=e.offsetY==undefined?e.layerY:e.offsetY;
	}
}

function beginGame () {
	
	can1=document.getElementById('canvas1');
	ctx1=can1.getContext('2d');
	can2=document.getElementById('canvas2');
	ctx2=can2.getContext('2d');
	
	canWidth=can1.width;
	canHeight=can1.height;
	
	var beginPic = new Image();
	
	beginPic.src='./src/cover.png';
	
	beginPic.onload=function () {
		ctx1.drawImage(beginPic,0,0,canWidth,canHeight);
		ctx1.save();
	ctx1.textAlign = 'center';
	ctx1.font = '25px Arial';
	ctx1.shadowBlur=20;
	ctx1.shadowColor='white';
	ctx1.fillStyle='white';
	ctx1.fillText('喂食小鱼 使其存活', canWidth*0.5, canHeight*0.5+200);
	ctx1.restore();
	}
	
	setTimeout(function() {
		game();
	}, 3000);
	
}

function gameover() {
	
	Galpha+=0.01;
	if(Galpha>1){
		Galpha=1;
	}
	ctx2.save();
	ctx2.textAlign = 'center';
	ctx2.font = '25px Arial';
	ctx2.shadowBlur=20;
	ctx2.shadowColor='white';
	ctx2.fillStyle='rgba(255,255,255,'+Galpha+')';
	ctx2.fillText('GAME OVER', canWidth*0.5, canHeight*0.5);
	ctx2.restore();
	
}