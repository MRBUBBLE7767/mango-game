const Constraint = Matter.Constraint;
class String {
    constructor(bodyA,pointB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness: 0.1,
            length: 50
        }
        this.pointB= pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
  }
}