function merge_interval(arraylist){
    if(arraylist.length <=1){
        return arraylist;
    }
    let sorted_arraylist = arraylist.sort((a,b)=>a[0]-b[0]);
    let i =0;
    let result =[];
    while(i<arraylist.length){
        let [start,end] = arraylist[i];
        let j = i+1;
        while(j <arraylist.length && arraylist[j][0]<=end){
            end = Math.max(end,arraylist[j][1]);
           
            j++;
        }
         result.push([start,end]);
        i=j;
    }
    return result;
};
console.log(merge_interval([[1,3],[2,6],[8,10],[15,18]]))