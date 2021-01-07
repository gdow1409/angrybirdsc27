class Chain {

    constructor(objectA, objectB){
        var options = { bodyA:objectA,
            bodyB:objectB,
            stiffness : 0.04,
            length: 10
    } 
      
                  
     this.chain = constraint.create(options)
     World.add(world,this.chain);         
    }
display(){
    var pointA  = this.chain.bodyA.position
    var pointB = this.chain.bodyB.position
    strokeWeight(3);
    line(pointA.x,pointA.y, pointB.x,pointB.y);
}

}