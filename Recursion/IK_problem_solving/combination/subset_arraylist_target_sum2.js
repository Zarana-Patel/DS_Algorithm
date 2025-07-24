function check_if_sum_possible(arr, k) {
    let found = false;
   function helper(index,slate,k){
       if(index === arr.length){
          let sum = slate.reduce((a,b)=>a+b,0);
          if(sum === k && slate.length > 0){
              found = true;
              return true;
          }
         return false;
       }
       if(index === arr.length) {
        return false;
       }
       
       //include choices
       slate.push(arr[index]);
       let left_answer = helper(index+1,slate,k);
       slate.pop();

       if(left_answer){
        return true;
       }
         //exclude choices
         let right_answer = helper(index+1,slate,k);
         if (right_answer) {
            return true;
        }
       
   }
   helper(0,[],k);
  return found;
}

console.log(check_if_sum_possible([2,4,8],6));