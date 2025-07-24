function threesum(arr){
    let sorted = arr.sort((a,b)=a-b);
    console.log(sorted);
}
console.log(threesum([10,3,-4,1,-6,9]));