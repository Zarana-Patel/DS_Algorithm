
function twoSumSortedWithDuplicates(nums, target) {
    const hash_map = new Map();
    const results = [];
   for(let i=0;i<=nums.length-1;i++){
       const difference = target - nums[i];
        if(hash_map.has(difference)){
            return [nums.indexOf(difference),i];
        }
        hash_map.set(nums[i],i);
   }
}

  console.log(twoSumSortedWithDuplicates([2, 5, 6, 1, 4],10));