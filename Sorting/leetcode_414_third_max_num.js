function third_max_desc(arr){
   let unique = [...new Set(arr)];
    let sorted_arr = unique.sort((a,b)=>b-a);
   return sorted_arr.length >= 3 ? sorted_arr[2] : sorted_arr[0];
}
console.log(third_max_desc([1,2,2,3]));