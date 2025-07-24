function dutch_flag(arr){
        if(arr.length === 0){
            return arr;
        }
    let start_pt = 0;
    let middle_pt = 0;
    let end_pt = arr.length-1;
   while(middle_pt <=end_pt){
        if(arr[middle_pt] ==="R"){
            [arr[middle_pt],arr[start_pt]] = [arr[start_pt],arr[middle_pt]];
            start_pt++;
            middle_pt++;
        }
        else if(arr[middle_pt] ==="B"){
                [arr[middle_pt],arr[end_pt]] = [arr[end_pt],arr[middle_pt]];
                end_pt --;
                
        }
        else{
            middle_pt++;
        }
    }
    return arr;
}
console.log(dutch_flag(["G","B","G","G","R","B","R","G"]));