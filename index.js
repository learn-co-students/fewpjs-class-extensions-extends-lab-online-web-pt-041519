// Polygon class

class Polygon {
   // accepts array of integers in constructor
   constructor(sidesArray) {
      this.sidesArray = sidesArray
   }

   get countSides() {
      let count = 0
      for(let i = 0; i < this.sidesArray.length; i++) {
         count += 1
      }
      return count
   }

   get perimeter() {
      let totalOfSides = this.sidesArray.reduce((acc, curr) => acc += curr)
      return totalOfSides
   }
}

// triangle has to inherit from Polygon
class Triangle extends Polygon {

   get isValid () {
      if ((this.sidesArray[0] + this.sidesArray[1] <= this.sidesArray[2]) || (this.sidesArray[0]+this.sidesArray[2] <= this.sidesArray[1]) || (this.sidesArray[1] + this.sidesArray[2] <= this.sidesArray[0])) {
        return false
      } 
      else {
        return true
      }
   }
}


class Square extends Polygon {

   get isValid() {
      return this.sidesArray.every((el) => el === this.sidesArray[0])
   }

   get area() {
      return this.sidesArray.reduce((acc, curr) => acc += curr)
   }
}
