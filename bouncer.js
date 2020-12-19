class Wall
{
    constructor(x,y)
    {
        var options = {
            isStatic: true,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.rectangle(x,y,10,600,options);
        World.add(world,this.body);
    }
    display()
    {
        fill("grey");
        strokeWeight(3);
        stroke("black");
        rect(this.body.position.x,this.body.position.y,10,600);
    }
}