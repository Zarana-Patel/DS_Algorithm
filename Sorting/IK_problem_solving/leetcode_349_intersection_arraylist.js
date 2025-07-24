function multiple_intersection(arr1,arr2,arr3){
 let merge_intersect_two = intersect(arr1,arr2);
 let final = intersect(merge_intersect_two,arr3);
 if(final.length){
    return final;
 }
 else{
    return [-1];
 }
 
 
}
function intersect(arr1,arr2){
    let intersection = [];
    let i=0;
    let j=0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] === arr2[j]){
            intersection.push(arr1[i]);
            i++;
            j++;
        }
        else if(arr1[i] < arr2[j]){
           i++;
        }
        else{
            j++;
        }
      }
      return intersection;
}
console.log(multiple_intersection([1,2,3,4],[],[3,5,6]));