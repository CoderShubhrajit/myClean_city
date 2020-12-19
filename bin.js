class Dustbin
{
    constructor(x,y)
    {
        var options = {
            isStatic: true,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.rectangle(x,y,200,250,options);
        this.image = loadImage("dustbin.png");
        World.add(world,this.body);

        //this.body = Bodies.rectangle(x,y,20,100,options);
        //World.add(world,this.body);

        //this.body = Bodies.rectangle(x,y,20,100,options);
        //World.add(world,this.body);
    }
    display()
    {
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,-95,200,250);
        pop();
        //paperBall.x = this.image.body.position.x;
        //paperBall.y = this.image.body.position.y;
    }
}