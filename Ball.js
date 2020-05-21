class Ball{
    constructor(x, y, width, height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
      }
      display(){
         push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(LEFT);
        rect( this.x,this.height, this.width, this.height);
        pop();
      }
}