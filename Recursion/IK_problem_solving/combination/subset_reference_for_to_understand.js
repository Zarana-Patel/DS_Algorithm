function subsets(nums) {
    let result = [];

    function dfs(stage, index, slate) {
        console.log(stage, index, slate);
        if (index === nums.length) {
        
            result.push([...slate]); // Save a copy of the current slate (subset)
            return;
        }

        // Choice 1: Don't pick nums[index]
        dfs("Exclude", index + 1, slate);

        // Choice 2: Pick nums[index]
        slate.push(nums[index]);
        dfs("Include", index + 1, slate);

        // Backtrack: Remove the last number added
        slate.pop();
    }

    dfs("Start", 0, []);
    return result;
}

console.log(subsets([1,2,3]));