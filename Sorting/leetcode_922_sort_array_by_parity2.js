function sort_array_parity2(arr){
    let ptr1 = 0;
    let ptr2 =1;
   
      while(ptr1<arr.length && ptr2<arr.length){
        if(arr[ptr1]%2 ===0){
            ptr1 = ptr1 +2;
        }
        else if(arr[ptr2]%2 ===1){
            ptr2 = ptr2+2;
        }
        else{
            [arr[ptr1],arr[ptr2]] = [arr[ptr2],arr[ptr1]];
            ptr1 = ptr1 +2;
            ptr2 = ptr2 +2;
        }
      }
         return arr;
   
    }
console.log(sort_array_parity2([4,2,5,7]));