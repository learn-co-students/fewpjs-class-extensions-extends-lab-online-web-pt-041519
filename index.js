// Your code here
class Polygon {
    constructor(array) {
        this.sides = array
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let sum = 0
        this.sides.forEach(el => sum += el)
        return sum
    }
}

class Triangle extends Polygon {
    get isValid() {
        let array = this.sides
        if (array.length === 3 && (array[0] + array[1]) > array[2] && (array[2] + array[1]) > array[0] && (array[2] + array[1]) > array[0])
        {
            return true
        } else {
            return false
        }
   
    }
}

class Square extends Polygon{

    get area() {
        return this.sides[0] * this.sides[0]
    }
    get isValid() {
        let s = this.sides
        if (s.length === 4 && s[0] === s[1] && s[1] === s[2] && s[2] === s[3] ) {
            return true
        } else {
            return false
        }
    }
    
}