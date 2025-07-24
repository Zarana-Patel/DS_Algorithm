function find_combinations(n, k) {
    // Write your code here.
    let result = [];
    function combinationsHelper(index,slate,k) {
        if (slate.length === k) {
            return result.push([...slate])
        }
        // base case
        if (index === n) return;
        // recursive case
        combinationsHelper(index + 1, slate,k);
        slate.push(index+1);
        combinationsHelper(index + 1, slate,k);
        slate.pop();
    }
    combinationsHelper(0, [], k)
    return result;
}
