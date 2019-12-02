// Your code here
class Polygon {
    constructor(array) {
        this.array  = array
    }

    get countSides() {
        return this.array.length
    }

    get perimeter () {
        return this.array.reduce(function(total, element){ return element + total}, 0)
    }

}

class Triangle extends Polygon {
    get isValid() {
        // return this.array.length === 3
        if (this.array[0] + this.array[1] > this.array[2] && this.array[0] + this.array[2] > this.array[1] && this.array[1] + this.array[2] > this.array[0]) {
            return true
          }
          else {
            return false
          }
    }
}

class Square extends Polygon {
    get area() {
        return this.array[0] * this.array[0]
    }
    get isValid() {
        return this.array.every( el => el === this.array[0])
    }

}