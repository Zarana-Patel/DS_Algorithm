function get_permutations(arr) {
  const result = [];
    function helper(arr,i,slate){
        if(i === arr.length){
            result.push([...slate]);
            return;
        }
        let hashmap = new Set();
        for(let pick = i;pick<arr.length;pick++){
           if(hashmap.has(arr[pick])){
            continue;
           }
           else{
            hashmap.add(arr[pick]);
            [arr[pick],arr[i]] = [arr[i],arr[pick]];
            slate.push(arr[i]);
            helper(arr,i+1,slate);
            slate.pop();
            [arr[pick],arr[i]] = [arr[i],arr[pick]];
           }
        }
    }

    helper(arr,0,[]);
    return result;
}
