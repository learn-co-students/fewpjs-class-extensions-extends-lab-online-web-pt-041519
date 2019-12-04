// Your code here
class Polygon 
{
    constructor(array)
    {
        this.array = array
    }
    
    //get keyword to make a getter method 
    //countSides that counts the number of sides (each index in the array).
    get countSides()
    {
        
        const allSides = this.array.length ;
        return allSides
          
    }

    //perimeter that calculates the sum of each side (each index in the array) 
    //of the polygon. This method will become accessible to its child classes.
    get perimeter()
    {   let sumOfSides = 0;
        for (let side = 0; side < this.array.length; side++) {
            sumOfSides = sumOfSides + this.array[side] 
        }
        return sumOfSides; 
    }
}

class Triangle extends Polygon 
{   
    get isValid(){
        let first = this.array[0]
        let second = this.array[1]
        let third = this.array[2]


        return ((first + second > third) && (first + third > second) && (second + third > first) && (first + second + third > 0))
    } 
}

class Square extends Polygon
{
    get isValid()
    { 
        return  this.array.every( side => side === this.array[0] )  
    }

    get area() { 
        return this.array[0] * this.array[0]
    }

}