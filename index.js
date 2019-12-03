// Your code here
class Polygon {
    constructor(array) {
       this.array = array
    }
 
    get countSides() {
       let count = 0
       for(let i = 0; i < this.array.length; i++) {
          count += 1
       }
       return count
    }
 
    get perimeter() {
       let totalOfSides = this.array.reduce((total, side) => total += side)
       return totalOfSides
    }
 }

 class Triangle extends Polygon {
     get isValid() {
         if ((this.array[0] + this.array[1] > this.array[2]) && (this.array[1] + this.array[2] > this.array[0]) && (this.array[2] + this.array[0] > this.array[1])) {
             return true
         } else {
             return false
         }
     }
 }

 class Square extends Polygon {
     get isValid() {
         if((this.array[0] == this.array[1]) && (this.array[1] == this.array[2]) && (this.array[2] == this.array[0])) {
             return true
         } else {
             return false
         }
     }

     get area() {
         return this.array[0] * this.array[1]
     }
 }