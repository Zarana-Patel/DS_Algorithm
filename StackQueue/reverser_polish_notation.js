
function reverse_polish_notation(str){
    let stack = [];
    for(let i=0;i<str.length;i++){
        if(!isNaN(str[i])){
            stack.push(Number(str[i]));
        }
        else{
            let a = stack.pop();
            let b = stack.pop();
            let result;
            switch(str[i]){
                case '+':
                    result = a+b;
                    break;
                case '-':
                    result = a-b;
                    break;
                case'*':
                    result = a*b;
                    break;
                case'/':
                    result = a/b;
                    break;
                default:
                   throw new Error(`Unknown operator: ${str[i]}`)        
           
        }
            stack.push(result);
    }
}
return stack.pop();
}










console.log(reverse_polish_notation("2345+-*"));
