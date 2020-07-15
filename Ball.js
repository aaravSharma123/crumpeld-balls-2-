class Paper1{
    constructor(x,y,radius){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2,
        
      }
      
    this.body = Bodies.circle(x,y,radius,options);
    this.image = loadImage("paper.png");
      this.radius = radius;
      World.add(world, this.body);
    }

    display(){
        var pos =this.body.position 
       image(this.image,400,620,60,60);
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(pos.x, pos.y, this.radius, this.radius);
      }
}