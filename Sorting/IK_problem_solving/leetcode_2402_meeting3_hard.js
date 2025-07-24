function meeting(arr){
    if(arr.length <0){
        return arr;
    }
    let count =0;
   for(let i =1;i<arr.length;i++){
    if(arr[i][0] >= arr[i-1][1]){
        count++;
    }
   }
   return count;
       
}
console.log(meeting([[1,5],[5,8],[9,15]]));