class Box  {
  constructor(x, y, width, height){
    var options = {
      'restitution':0.8,
      'friction':0.8,
      'density':0.8
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width=width;
  this.height=height;
  World.add(world,this.body);
  }
  display(){
    if(this.body.speed < 3){
      push();
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER);
      rect(0,0, this.width, this.height);
      pop();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image( 0,0,this.body.position.x, this.body.position.y, );
       pop();
     }
   
 }
};
