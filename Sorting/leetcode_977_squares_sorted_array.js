function squares_of_sorted_arraylist(nums){
    let left = 0;
    let right = nums.length-1;
    let pos = nums.length-1;
    let result = [];
    while(left <= right){
      let leftsq = nums[left] * nums[left];
      let rightsq = nums[right] * nums[right];
      if(leftsq > rightsq){
        result[pos] = leftsq;
        pos--;
        left++;
    
      }
      else{
        result[pos]= rightsq;
        pos--;
        right--;
      }
    }
return result;
}

console.log(squares_of_sorted_arraylist([-4,-1,0,3,10]));