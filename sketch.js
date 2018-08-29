var sectrig=true
var mintrig=true
var htrig=true
function setup(){
	createCanvas(400,400);
}

function draw(){
	frameRate(1)
	angleMode(DEGREES);
	background(0);
	strokeWeight(5);
	noFill();
	translate(width/2,height/2);
	rotate(-90)
	
	//sec
	if(second()==1)
	   sectrig=!sectrig
	
	stroke(255,0,100)
	if(sectrig)
	{
  		var as = map(second(),0,60,0,360);
  	arc(0,0,200,200,1,as);
	}
	else
	{	
	  var as = map(second(),0,60,1,360);
  	arc(0,0,200,200,as,360);
	}
	
	push()
	strokeWeight(1)
	rotate(as)
	line(0,0,80,0)
	pop()
	
	//min
	stroke(0,255,100)
	
	if(minute()==1)
	   mintrig=!mintrig
	
	if(mintrig)
	{
  		var am = map(minute(),0,60,0,360);
  	arc(0,0,190,190,1,am);
	}
	else
	{	
	  var am = map(minute(),0,60,1,360);
  	arc(0,0,190,190,am,360);
	}

	
	push()
	strokeWeight(3)
	rotate(am)
	line(0,0,60,0)
	pop()

//hr
stroke(100,0,255)
	var ah = map(hour()%12,0,11,0,360);
	arc(0,0,180,180,0,ah);
	
	push()
	rotate(ah)
	line(0,0,40,0)
	pop()
	
	//numbers
	
	strokeWeight(1)
	stroke(0,0,255)
	for(var i =1;i<13;i++){
		push()
		translate(120*cos(359/12*i),120*sin(359/12*i))
		rotate(90)
		text(i,0,0)
		pop()
	}
}