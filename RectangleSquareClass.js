
// *Created Class Rectangle below

class Rectangle {
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    
    // *Area Calculating function
    calcArea(){
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(10,5);
// rectangle.calcArea();
console.log(rectangle.calcArea());


// *Created Class Square which extends properties from Rectangle Class
class Square extends Rectangle{
    constructor(side){
        super(side,side);
    }

    // *Get Area method from a square instance
    get Area(){
        super.calcArea();
    }
}

const square = new Square(10);
// square.calcArea();
console.log(square.calcArea())



