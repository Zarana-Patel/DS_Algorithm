function majority_elem(arr){
    let nums = [...arr].sort((a,b)=>a-b);
    let freq = 0;
    let ans = nums[0];
    for(let i=1;i<nums.length;i++){
        if(nums[i] === nums[i-1]){
            freq++;
        }
        else{
            freq =1;
            ans = nums[i];
        }
        if(freq > nums.length/2){
            return ans;
        }
    }
    return ans;
}
console.log(majority_elem([1,2,2,1,1])); // time complexity = n log n 

//Moor's voting algorithm

function majority_find_element(arr){
    let freq =0;
    let ans = 0;
    for(let i=0;i<arr.length;i++){
       
        if(freq ===0){
            ans = arr[i];
        }
        else if(ans === arr[i]){
            freq++;
        }
        else{
            freq--;

        }
    }
    return ans;
}
console.log(majority_find_element([1,2,2,1,1])); // time complexity = n 