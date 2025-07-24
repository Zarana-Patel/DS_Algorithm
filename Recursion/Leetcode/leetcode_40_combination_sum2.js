function combination_sum2(arraylist, targetSum) {
    arraylist.sort((a, b) => a - b); // sort for duplicates handling
    let result = [];
    
    function helper(index, currentSum, slate) {
        if (currentSum === targetSum) {
            result.push([...slate]);
            return; // important to stop here
        }
        if (index === arraylist.length || currentSum > targetSum) {
            return;
        }

        // Loop-based recursion to handle duplicates
        for (let i = index; i < arraylist.length; i++) {
            // Skip duplicates
            if (i > index && arraylist[i] === arraylist[i - 1]) {
                continue;
            }

            slate.push(arraylist[i]);
            helper(i + 1, currentSum + arraylist[i], slate); // i + 1 since each number is used only once
            slate.pop();
        }
    }

    helper(0, 0, []);
    return result;
}

console.log(combination_sum2([10,1,2,7,6,1,5], 8));
