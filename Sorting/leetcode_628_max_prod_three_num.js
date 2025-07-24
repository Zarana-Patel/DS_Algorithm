function max_prod(arr){
    let ptr1 = 1;
    let ptr2 =2;
    let ptr = 0;
    let max_prod = 0;
     if (arr.length < 3) {
        throw new Error("Array must have at least 3 elements");
    }

    while(ptr <arr.length && ptr1 < arr.length && ptr2<arr.length){
        let p = arr[ptr] * arr[ptr1] * arr[ptr2];
        max_prod = Math.max(max_prod,p);
        ptr++;
        ptr1++;
        ptr2++;
    }
    return max_prod;
}
console.log(max_prod([1,2]));