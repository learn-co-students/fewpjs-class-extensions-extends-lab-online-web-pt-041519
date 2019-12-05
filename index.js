// Your code here
class Polygon{
    constructor(sides){
        this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){

        // Way #1
        let totalLength = 0;

        /*
        for (let i = 0; i < this.sides.length; i++) {
            totalLength = totalLength + this.sides[i];
            // Or you can write it like this:
            // totalLength += this.sides[i]
        }
        //*/

        //*
        //  Way #2 - Using Reduce
        totalLength = this.sides.reduce(function(total, item) {
            total += item;
            return total;
        }, 0);
        //*/

        return totalLength;
    }
}

class Triangle extends Polygon {
    get isValid(){
        let s1 = this.sides[0];
        let s2 = this.sides[1];
        let s3 = this.sides[2];

        if((s1 + s2 > s3) && (s1 + s3 > s2) && (s2 + s3 > s1)){
            return true
        }
        return false
    }
}


class Square extends Polygon {
    get isValid(){
        let s1 = this.sides[0];
        let s2 = this.sides[1];
        let s3 = this.sides[2];
        let s4 = this.sides[3];

        if(s1 === s2 && s2 === s3 && s3 === s4){
            return true
        }
        return false
    }

    get area(){
        let s1 = this.sides[0];
        let s2 = this.sides[1];
    
        return s1 * s2
    }
}

