class Board{
    constructor(x,y,height,width){
        var options ={
            isStatic:true
        };

        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        this.image = loadImage("./assets/board.png");

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push()
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();   
    }
}