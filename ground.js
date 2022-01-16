// Creating the class

class Ground 
{
  constructor(x,y,w,h)
  {
    let grounds_options=
    {
      isStatic:true   
    };
        
    this.body = Bodies.rectangle(x,y,w,h,grounds_options);
    this.width = w;
    this.height = h;
    World.add(world,this.body);
  }

  display()
 {
   var pos = this.body.position;
   push();
   rectMode(CENTER);
   fill("yellow");
   stroke(235);
   rect(pos.x,pos.y,this.width,this.height);
   pop();
 }
}