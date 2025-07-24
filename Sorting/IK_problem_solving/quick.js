function quicksort(arr,start = 0 ,end =arr.length-1){
    if(start < end){
        let partitionIndex = partitionHoare(arr,start,end);
        quicksort(arr,start,partitionIndex-1);
        quicksort(arr,partitionIndex+1,end);
    }
    return arr;
}
function partitionHoare(arr, start, end) {
    let pivotIndex  = Math.floor(Math.random() * (end - start + 1)) + start; 
    console.log(`pivot index :  ${arr[pivotIndex]}`);
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];

    let smaller = start + 1;
    let bigger = end;

    while (smaller <= bigger) {
        if (arr[smaller] < arr[start]) {
            smaller++;
        } else if (arr[bigger] > arr[start]) {
            bigger--;
        } else {
            [arr[smaller], arr[bigger]] = [arr[bigger], arr[smaller]];
            smaller++;
            bigger--;
        }
    }
    [arr[start], arr[bigger]] = [arr[bigger], arr[start]];

    return bigger;
}

console.log(quicksort([4,7,2,3,8,1,5,9]));


