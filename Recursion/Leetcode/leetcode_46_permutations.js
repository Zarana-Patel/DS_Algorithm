function get_permutations(arraylist){
    let result =[];
    function helper(arr,idx,slate){
        if(idx === arr.length){
            result.push([...slate]);
        }
        for(let i=idx;i<arr.length;i++){
            [arr[idx],arr[i]] = [arr[i],arr[idx]];
            slate.push(arr[idx]);
            helper(arr,idx+1,slate);
            slate.pop();
            [arr[idx],arr[i]] = [arr[i],arr[idx]];
        }
    }
    helper(arraylist,0,[]);
    return result;
}
console.log(get_permutations([1,2,3]));