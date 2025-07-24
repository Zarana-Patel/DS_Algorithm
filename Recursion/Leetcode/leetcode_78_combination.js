function combination(nums){
   let result = [];
   function helper(nums,index,slate){
      if(index === nums.length){
         result.push([...slate]);
         return;
      }
      // exclude choice for left most element
      helper(nums,index+1,slate);
      // include choices for left most element
      slate.push(nums[index]);
      helper(nums,index+1,slate);
      slate.pop();
   }
   helper(nums,0,[]);
   return result;
}

console.log(combination([1,2,3]));