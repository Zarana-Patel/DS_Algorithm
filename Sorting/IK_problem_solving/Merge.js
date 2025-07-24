function mergeSort(arraylist){
        if(arraylist.length <2){
            return arraylist;
        }
        let n = arraylist.length;
        let middle = Math.floor(n /2);
        let left = arraylist.slice(0,middle);
        let right = arraylist.slice(middle);
        return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
    let sorted_array = [];
    let i = 0;
    let j=0;
    while(i< left.length && j<right.length){
        if(left[i] <right[j]){
            sorted_array.push(left[i]);
            i++;
        }else{
            sorted_array.push(right[j]);
            j++
        }
    }
    return sorted_array.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([23,45,1,12,78,34]));