function relativesort(arr1,arr2){
   let freq = {};
    for(let i =0;i<arr1.length;i++){
        let num = arr1[i];
        if(freq[num]){
            freq[num] = freq[num]+1;
        }
        else{
            freq[num] =1;
    }}
    let index =0 
    for(let element of arr2){
       while(freq[element]>0){
            arr1[index] = element;
            index++;
            freq[element]--;
       }
    }
    // Collect and sort remaining elements
    const remaining = [];

    for (let key in freq) {
       while(freq[key]>0) {
            remaining.push(parseInt(key));
            freq[key]--;
        }
    }
    remaining.sort((a, b) => a - b);
  
    for (let i = 0; i < remaining.length; i++) {
        arr1[index] = remaining[i];
        index++;
  }
    
   return arr1;
}
console.log(relativesort([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]));