class Polygon {

  constructor(sideArr) {
    this.sideArr = sideArr
  }

  get countSides() {
    return this.sideArr.length
  }

  get perimeter() {
    return this.sideArr.reduce(function(total, amount){ return amount + total})
  }
  
}

class Triangle extends Polygon {
  get isValid() {
    return (
      ((this.sideArr[0] + this.sideArr[1]) > this.sideArr[2]) &&
      ((this.sideArr[1] + this.sideArr[2]) > this.sideArr[0]) && 
      ((this.sideArr[2] + this.sideArr[0]) > this.sideArr[1])
    )
  }
} 

class Square extends Polygon {
  get isValid() {
    return this.sideArr.every( side => side === this.sideArr[0])
  }
  
  get area() {
    return this.sideArr[0] ** 2
  }
} 