function subset(arraylist){
    let sorted = arraylist.sort((a,b)=>a-b);
    let result = [];
   
    function helper(arr,index,slate){
          
        if(index == arr.length){
            result.push([...slate]);
            return;
        }
        //include choices 
        slate.push(arr[index]);
        helper(arr,index+1,slate);
        slate.pop();

       let idx = index+1;
        while(idx < arr.length && arr[idx] ===arr[idx-1]){
            idx++;
        }
        helper(arr,idx,slate);


    }
    helper(sorted,0,[]);
    return result;
}

console.log(subset([2,1,2]));