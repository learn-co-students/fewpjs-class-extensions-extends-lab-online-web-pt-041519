// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
    
  }

  get perimeter() {
    let total = 0
    for (let i = 0; i < this.sides.length; i++) {
      let acc = this.sides[i]
      total += acc 
    }
    return total
  }
}

class Triangle extends Polygon {
  
  get isValid() {
    if (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[0] + this.sides[2] > this.sides[1] && this.sides[2] + this.sides[1] > this.sides[0]) {
      return true
    } else {
      return false
    }
  }
}

class Square extends Polygon {

  get isValid() {
    if (this.sides[0] === this.sides[1]  && this.sides[0] === this.sides[2] && this.sides[0] === this.sides[3]) {
      return true
    } else {
      return false
    }
  }

  get area() {
    if (this.isValid) {
     let length = this.sides[0]
     let width = this.sides[1]
     let theSquaresArea = length * width
     return theSquaresArea
    }
  }
}