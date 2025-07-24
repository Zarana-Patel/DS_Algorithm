function two_sum_sorted(arraylist,target){
    let start = 0;
    let end = arraylist.length-1;
    while(start < end){
        if(arraylist[start]+arraylist[end] == target){
            return [arraylist[start],arraylist[end]];
        }
        else if(arraylist[start]+arraylist[end] > target){
                --end;
        }
        else{
            ++start;
        }
    }
    return [-1,-1];
}

console.log(two_sum_sorted([1,4,5,7],34));