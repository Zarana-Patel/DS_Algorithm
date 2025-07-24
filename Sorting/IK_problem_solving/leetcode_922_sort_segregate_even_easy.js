function segregate(arr){
    let even_pt = 0;
    let end_pt = arr.length-1;
    for(let i =0;i<=end_pt;i++){
        if(arr[i] % 2 === 0){
            [arr[even_pt],arr[i]] = [arr[i],arr[even_pt]];
            even_pt++;
        }
        else if(arr[i] %2 ===1){
            [arr[end_pt],arr[i]] = [arr[i],arr[end_pt]];
            end_pt--;
        }
       
    }
    return arr; 
}
console.log(segregate([2, 10, 5, 4, 9, 5, 7, 9]));