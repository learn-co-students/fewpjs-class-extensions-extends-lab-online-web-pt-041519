class Polygon {
    constructor(sides){
        this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        
       const perimeter = function (total, num) {
            return total + num;
          }

        return this.sides.reduce(perimeter)
    }
} // END OF POLYGON CLASS

class Triangle extends Polygon{
    get isValid(){
        if (this.sides.length !== 3){
            return false
        }else{
            let side1 = this.sides[0]
            let side2 = this.sides[1]
            let side3 = this.sides[2]
            
            if ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1)){
                return true 
            }
            return false
        }
    }
} // end of triangle

class Square extends Polygon{
    get area(){
        let side1 = this.sides[0]
        return Math.pow(side1,2)
    }

    get isValid(){
        if (this.countSides !== 4){
            return false
        }
        else {
            let side1 = this.sides[0]
            let side2 = this.sides[1]
            let side3 = this.sides[2]
            let side4 = this.sides[3]
            if ((side1 === side2) && (side1 == side3) && (side1 == side4)){
                return true
            } 
            return false
        }
    }
}