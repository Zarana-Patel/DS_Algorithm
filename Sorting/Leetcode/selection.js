const selection = (arraylist)=>{
    for(let i =0;i<arraylist.length;i++){
         let minIndex = i;
         for(let j =i+1;j<arraylist.length;j++){
             if(arraylist[j] < arraylist[minIndex]){
                 minIndex =j;
             }
         }
         if(minIndex !== i){
             [arraylist[i],arraylist[minIndex]] = [arraylist[minIndex],arraylist[i]];
         }
    }
    return arraylist;
}
console.log(selection([12,45,1,75,23,37]));