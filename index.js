class Polygon {

    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce( (current, total) => total += current )
    }

}


class Triangle extends Polygon {

    constructor(sides) {
        super(sides)
    }

    get isValid() {
        return (this.countSides === 3 &&
                this.sides[0] + this.sides[1] > this.sides[2] && 
                this.sides[0] + this.sides[2] > this.sides[1] && 
                this.sides[1] + this.sides[2] > this.sides[0]) ? true : false
    }

}


class Square extends Polygon {

    constructor(sides) {
        super(sides)
    }

    get isValid() {
        return this.sides.every( s => s === this.sides[0] ) ? true : false
    }

    get area() {
        return this.sides[0] ** 2
    }

}