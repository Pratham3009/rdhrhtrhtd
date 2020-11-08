class rope{
    constructor(body1, body2, offSetX, offSetY){
       
            this.offSetX = offSetX
            this.offSetY = offSetY
            var options ={
                bobyA:body1,
                bodyB:body2,
                pointB:{x:this.offSetX , y:this.offSetY}
            }
        // console.log(options);
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var body1 = this.rope.body1;
        var body2 = this.rope.body2;
    }
    
}