class Basket {
    constructor(x, y, width, height) {
      var options = {
         isStatic:true
      }
      this.body = Bodies.rectangle(x, y, 4*width/5, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("dustbingreen.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      //rectMode(CENTER)
      //rect(pos.x,pos.y,this.width,this.width)
      
      imageMode(CENTER)
      image(this.image,pos.x,pos.y,this.width,this.width)
    }
  }