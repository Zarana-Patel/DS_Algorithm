function permutation_str(arr){
    const result = [];
    function helper(arr,index,slate,k){

        if (slate.length === k) {
            return result.push([...slate])
          }

            if (index === arr.length) return;
        for(let i = index;i<arr.length;i++){
           
            [arr[i],arr[index]] = [arr[index],arr[i]];
            slate.push(arr[index]);
            helper(arr,index+1,slate,k);
            slate.pop();
          
            [arr[i],arr[index]] = [arr[index],arr[i]];
            
        }
    }

    helper(arr,0,[],2);
    return result;
}

console.log(permutation_str([1,2,3]));