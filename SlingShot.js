class slingshot
{
  constructor(body1,point2)
  {
    var options = {
        bodyA : body1,
        pointB : point2,
        length : 50,
        stiffness : 0.03
    }
    this.slingshot = Constraint.create(options);
    World.add(world,this.slingshot);

  }
  display()
  {
    
    if(this.slingshot.bodyA)
    {  var logpos = this.slingshot.bodyA.position;
    var birdpos = this.slingshot.pointB;
  
    push()
    strokeWeight(2);
    line(logpos.x,logpos.y,birdpos.x,birdpos.y)
    pop()
    }
  }

  fly()
  {
    this.slingshot.bodyA = null;
  }
}