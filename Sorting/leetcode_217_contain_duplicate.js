function contain_duplicate(arr){
    let sorted_arr = arr.sort((a,b)=>a-b);
    let ptr1 = 0;
    let ptr2 = 1;
while(ptr1 <sorted_arr.length && ptr2 < sorted_arr.length){
        if(sorted_arr[ptr1] === sorted_arr[ptr2]){
            return true;
        }
        else{
            ptr1++;
            ptr2++;
        }
    }
return false;
}

console.log(contain_duplicate([2,3,4,1])); // Time complexity : n log n Space complexiry : n

//Optimal solution
function duplicate(arr){
  let seen = new Set();
  for(let num of arr){
    if(seen.has(num)) return true;
    else seen.add(num);
  }
  return false;
}

console.log(duplicate([2,3,4,1])); // time complexity O(n) and space Complexity O(n);