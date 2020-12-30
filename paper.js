class Paper{

constructor(x,y){
     var options ={
     restitution:0.3,
     friction:0.5,
     density:1.2
    }
    

    this.body = Bodies.circle(x,y,20,options);
    this.radius = 20;
    World.add(world,this.body);
}

    display(){

      var paperpos=this.body.position

      push();
      translate(paperpos.x,paperpos.y);
      ellipseMode(RADIUS);
      fill("white");
      ellipse(0,0,this.radius);
      pop();

    }







}
