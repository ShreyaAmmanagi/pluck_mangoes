class constraint {
constructor(bodyA,pointB){
var chain1 = {
    bodyA: bodyA,
    pointB: pointB,
    stiffness: 0.004,
    length: 0.1
}
this.pointB = pointB;
this.chain2 = Matter.Constraint.create(chain1);
World.add(world,this.chain2)
}
fly(){
    this.chain2.bodyA = null;
}
attach(body){
  this.chain2.bodyA = body
}

display(){
  if(this.chain2.bodyA){
  var pointB = this.pointB
  strokeWeight(4)
  line(this.chain2.bodyA.position.x,this.chain2.bodyA.position.y,pointB.x,pointB.y)
  }
}
}