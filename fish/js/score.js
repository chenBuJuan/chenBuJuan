var Score = function () {
	
	this.num;
	this.double;
	this.score;
	
	this.x;
	this.y;
	
};

Score.prototype.init = function () {
	
	this.num=0;
	this.double=1;
	this.score=0;
	
	this.x=canWidth * 0.5;
	this.y=canHeight - 20;
	
};

Score.prototype.draw = function () {
	
	ctx2.save();
	ctx2.fillStyle = 'white';
	ctx2.textAlign = 'center';
	ctx2.font = '20px Arial';
	ctx2.shadowBlur=20;
	ctx2.shadowColor='white';
	ctx2.fillText('SCORE ' + this.score, this.x, this.y);
	ctx2.restore();
	
};