class stone {
    constructor(x,y,width,height){
    this.body = Bodies.rectangle(x,y,width,height,{restitution:0,friction:1,density:2.5})
    this.width = width;
    this.height = height;
    this.image = loadImage("stone.png")
    World.add(world,this.body);        
    }
    display(){
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }
}