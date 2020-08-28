class Bob {

    constructor(x, y){
        
        var options = {
            isStatic: false,
            restitution: 1.0,
            friction: 1.0,
            density: 1.3
        }
        
        this.body = Bodies.circle(x, y, 20, options);
        this.radius = 40;
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(255, 204, 0);
        stroke("white");
        strokeWeight(2);
        ellipse(0, 0, this.radius);
        pop();
    }
}