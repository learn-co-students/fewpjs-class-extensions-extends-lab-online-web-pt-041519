class Polygon {

    constructor(intArr) {
        this.intArr = intArr
    }

    get countSides() {
        return this.intArr.length
    }

    get perimeter() {
        return this.intArr.reduce((memo, i) => memo + i)
    }

}

class Triangle extends Polygon {

    get isValid() {
        if (this.intArr.length === 3) {
            const a = this.intArr[0]
            const b = this.intArr[1]
            const c = this.intArr[2]
            return (a+b > c) && (a+c > b) && (b+c > a) ? true : false
        }
    }

}

class Square extends Polygon {

    get isValid() {
        return this.intArr.every((side, i, arr) => side === arr[0])
    }

    get area() {
        const a = this.intArr[0]
        return a * a
    }

}