function momFruitsCollision(){
	
	if(GAME){
		for(var i=0;i<fruit.num;i++){
			if(fruit.alive[i]){
				var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
				if(l<900){
					
					fruit.dead(i);
					score.num++;
					
					if(fruit.fruitType[i]=='orange'){
						
						mom.bigBodyCount++;
						if(mom.bigBodyCount>7&&score.double==1){
							mom.bigBodyCount=7;
						}
					}
					
					if(fruit.fruitType[i]=='blue'){
						
						if(score.double==2){
							mom.bigBodyCount++;
						}else{
							mom.bigBodyCount=8;
							score.double=2;
						}
						
					}
					
					if(mom.bigBodyCount>15){
						mom.bigBodyCount=15;
					}
					
				}
			}
		}
	}
}

function momBabyCollision(){
	
	if(GAME){
		var l=calLength2(mom.x,mom.y,baby.x,baby.y);
		if(l<900){
			
			if(score.num>0){
				baby.babyBodyCount=0;
				mom.bigBodyCount=0;
			}
			
			score.score+=score.num*score.double*100;
			score.num=0;
			score.double=1;
			
		}
	}
	
}