class Paper {
  constructor(x, y,diameter) {
    var options = {
      'isStatic':false,
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.circle(x, y,diameter, options);
    this.diameter = diameter;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    ellipseMode(CENTER)
    fill(255);
    ellipse(pos.x, pos.y, this.diameter,this.diameter);
    
  }
};
