// Your code here

class Polygon{
    constructor(array){
        this.array = array;
    }

    get countSides(){
        return this.array.length;
    }

    get perimeter(){
        let result = 0;
        for(let side of this.array){
            result += side;
        }
        return result;
    }
}

class Triangle extends Polygon {
    get isValid(){
        if (this.array.length !== 3) return false;
        let a = this.array[0];
        let b = this.array[1];
        let c = this.array[2];
        return ((a + b > c) && (b + c > a) && (a + c > b));
    }
}

class Square extends Polygon {
    get isValid(){
        let a = this.array[0];
        let b = this.array[1];
        let c = this.array[2];
        let d = this.array[3];

        return ((a===b)&&(a===c)&&(a===d));
    }

    get area(){
        return this.array[0] ** 2;
    }
}