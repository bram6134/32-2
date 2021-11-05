class Polygon {
    constructor(x,y,diameter) {
      this.body = Bodies.circle(x,y,diameter);
      this.diameter=diameter;
      this.image=loadImage("polygon.png");
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.diameter);
    }
  };
  


