function power(base,exponent){
    if(exponent === 1){
        return base;
    }
    else{
        return base * power(base,exponent-1);
    }
}
console.log(power(2,4));