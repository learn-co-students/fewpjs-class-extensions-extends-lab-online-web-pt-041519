// Your code here

class Polygon {
    constructor(sides){
        this.sides = sides
        this.count = this.sides.length
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((x,y) => x + y, 0)
    }
}

class Triangle extends Polygon {
    
    get isValid() {
        if (!Array.isArray(this.sides)) return;
        if (this.count !== 3) return;
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }

}

class Square extends Polygon {
    get area(){
       return this.sides[0]**2
    }

    get isValid(){
        if (!Array.isArray(this.sides)) return;
        if (this.count != 4) return;
        return ((this.sides[0] === this.sides[1]) && (this.sides[1] === this.sides[2]) && (this.sides[2] === this.sides[3]))
    }
}