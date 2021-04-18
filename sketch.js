
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var g,r,l,b,ball;
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(windowWidth,windowHeight);
	console.log(windowWidth)
	console.log(windowHeight)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
      
 	r= new Ground(width*36/50,(9*height/10)-(width/17),1,height/12)

  	b= new Basket(width*35/50,(9*height/10)-(width/17),width/9,height/80)
	
	g= new Ground(width/2,9*height/10,width,10*width/1290)
	ball= new Ball(width/5,height-220,50,50)
	Engine.run(engine);
	l=new Line(ball.body,{x:width/5,y:width/5})

	
  //  b.width=width/5
	//b.height=l.width
	//width/2,height-90,width,10
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  console.log(height)
 
  Engine.update(engine);
  l.display();
  ball.display();
	
  r.display();
  g.display();
  b.display();
  
  drawSprites();
 
  
}

/**function keyPressed(){
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:(12*width/129.9), y:-(8+29*height/125)})
    }
}*/

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   l.fly();
}