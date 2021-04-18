class Ball {
  constructor(x,y,width,height) {
     var options = {
       isStatic:false,
       restitution:0.6,
       friction:0.5,
       density:1.2
      }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image=loadImage("paper.png")
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    //rectMode(CENTER)
    //rect(pos.x,pos.y,this.width,this.width)
    imageMode(CENTER)
    image(this.image,pos.x,pos.y+(this.height/6),this.width,this.height)
    
   
  }
}