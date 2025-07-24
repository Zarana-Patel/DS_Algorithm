function get_permutations(arraylist){
    let result =[];
    function helper(arr,index,slate){
        if(slate.length === arr.length){
            result.push([...slate]);
        }
        let used = new Set(); // track used elements at this index
        for (let i = index; i < arr.length; i++) {
            if (used.has(arr[i])) continue; // skip duplicates
            used.add(arr[i]);
            console.log(arr);
            // Swap current index with i
            [arr[index], arr[i]] = [arr[i], arr[index]];
            slate.push(arr[index]);

            helper(arr, index + 1, slate);

            slate.pop();
            [arr[index], arr[i]] = [arr[i], arr[index]]; // backtrack
    }}
    helper(arraylist,0,[]);
    return result;
}
console.log(get_permutations([1,1,2]));