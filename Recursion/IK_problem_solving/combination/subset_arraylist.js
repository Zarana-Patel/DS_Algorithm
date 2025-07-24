function arraylist_subset(nums){
    let result = [];
    function subset(index,slate){
        if(index === nums.length){
            result.push([...slate]);
            return ;
        }

        //Exclude does not contain the index value of
        subset(index+1,slate);

        // Include contains the index value of the arraylist 
        slate.push(nums[index]);
        subset(index+1,slate);
        slate.pop();

    }
    subset(0,[]);
    return result;
}

console.log(arraylist_subset([1,2,3]));