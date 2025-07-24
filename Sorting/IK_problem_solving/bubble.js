function bubble(arraylist){
    let n = arraylist.length;
    let is_swapped = false;
    for(let i=0;i<n-1;i++){
        is_swapped =true;
        for(let j=0;j<n-1-i;j++){
            if(arraylist[j]>arraylist[j+1]){
                [arraylist[j],arraylist[j+1]] = [arraylist[j+1],arraylist[j]];
                is_swapped =false;
            }
        }
        if(is_swapped){
            break;
        }
    }
    return arraylist;
}
console.log(bubble([12,34,67,45,78,89]));