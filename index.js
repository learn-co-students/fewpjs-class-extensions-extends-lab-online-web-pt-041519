// Your code here
class Polygon {
  constructor(arrayOfIntegers) {
    this.arrayOfIntegers = arrayOfIntegers;
  }
  get countSides() {
    return this.arrayOfIntegers.length;
  }
  get perimeter() {
    return this.arrayOfIntegers.reduce((acc, value) => {
      return acc + value;
    }, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides !== 3) return;
    let side1 = this.arrayOfIntegers[0];
    let side2 = this.arrayOfIntegers[1];
    let side3 = this.arrayOfIntegers[2];
    return side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1;
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides !== 4) return;
    let side1 = this.arrayOfIntegers[0];
    let side2 = this.arrayOfIntegers[1];
    let side3 = this.arrayOfIntegers[2];
    let side4 = this.arrayOfIntegers[3];
    return side1 === side2 && side1 === side3 && side1 === side4;
  }
  get area() {
    if (this.isValid) {
      return this.arrayOfIntegers[0] * this.arrayOfIntegers[1];
    }
  }
}
