let arr = [6, 2, 8, 4, 11, 13];


function sunset(arr){
    let stack = [];
    for(let i=0;i<arr.length;i++){
    if(stack.length >0 && arr[stack[stack.length - 1]] <= arr[i]){
          stack.pop();
    }
        if(stack.length ===0  || i === arr.length-1)
            stack.push(arr[i]);
    }
    return stack;
   
}
console.log(sunset(arr));