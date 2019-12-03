class Polygon {
    constructor(array) {
        this.array = array
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        let total = 0
        for (let i = 0; i < this.array.length; i++) {
            total = total + this.array[i]
        }
        return total
    }

}

class Triangle extends Polygon {
    get isValid() {
        const a = this.array[0]
        const b = this.array[1]
        const c = this.array[2]

        
        if (a + b > c && a + c > b && b + c > a) {
            return true
        }
        return false
    }

}

class Square extends Polygon {

    get isValid() {
        const a = this.array[0]
        const b = this.array[1]
        const c = this.array[2]
        const d = this.array[3]

        if ( a === b && b === c && c === d){
            return true
        }
        
        return false
    }

    get area() {
        return this.array[1] ** 2
    }

}