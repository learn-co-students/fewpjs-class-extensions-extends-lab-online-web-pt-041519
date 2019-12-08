// Your code here
class Polygon {
	constructor(sidesArray) {
		this.sidesArray = sidesArray
	}

	get countSides() {
		return this.sidesArray.length
	}

	get perimeter() {
		return this.sidesArray.reduce( (acc, curr) => acc + curr )
	}
}

class Triangle extends Polygon {
	get isValid() {
		let sideOne = this.sidesArray[0]
		let sideTwo = this.sidesArray[1]
		let sideThree = this.sidesArray[2]
		if (this.countSides === 3) {
			if (sideOne + sideTwo > sideThree && sideOne + sideThree > sideTwo && sideTwo + sideThree > sideOne) {
				return true
			} else {
				return false
			}
		} else { 
			return false 
		}
	}
}

class Square extends Polygon {
	get isValid() {
		let sideValue = this.sidesArray[0]
		return this.sidesArray.every(side => side === sideValue)
	}

	get area() {
		return this.sidesArray[0] ** 2
	}
}