class MesinHitung {
    constructor(){
    this.i = 1;
    }
    
    add(i){
        this.i += i;
        return this;
    }

    substract(i){
        this.i -= i;
        return this;
    }

    multiply (i){
        this.i *= i;
        return this;
    }

    divide (i){
        this.i /= i;
        return this;
    }

    square (){
        this.i = Math.pow(this.i, 2); 
        return this;
    }

    exponent (){
        this.i = Math.pow(this.i, 3); 
        return this;
    }

    squareRoot (){
        this.i = Math.sqrt(this.i)
        return this;
    }

    result (){
        console.log(this.i);
    }

}


export default MesinHitung;