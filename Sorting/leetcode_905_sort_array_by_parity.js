function sortByParity(arr){
    let ptr1 = 0;
    let ptr2 = 0;
    for(let i =0;i<arr.length;i++){
      
        if(arr[i]%2 ===0){
             [arr[i],arr[ptr1]] = [arr[ptr1],arr[i]];
             ptr1++;
        }
    }
    return arr;
}
console.log(sortByParity([3,1,2,4]));