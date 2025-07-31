const paranthesis = {'}':'{',']':'[',')':'('};

function validparam(str){
   const stack =[];
   for(let i =0;i<str.length;i++){
        if(str[i] ==='{' || str[i] ==='[' || str[i]==='('){
            stack.push(str[i]);
        }
        else if (stack[stack.length-1] === paranthesis[str[i]]){
            stack.pop();
        }
        else{
            return false;
        }
   }
   return stack.length?false:true;
}



console.log(validparam('{[()]}'));