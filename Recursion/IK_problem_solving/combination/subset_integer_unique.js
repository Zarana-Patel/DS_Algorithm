function unique_subset(arr) {
    let result = [];
    let sortedarr = arr.sort((a, b) => a - b);

    function helper(sortedarr, index, slate) {
        if (index === sortedarr.length) {
            result.push([...slate]);
            return;
        }

        let count = 0;
        for (let i = index; i < sortedarr.length; i++) {
            if (sortedarr[i] === sortedarr[index]) {
                count++;
            } else {
                break;
            }
        }

        // Exclude all occurrences
        helper(sortedarr, index + count, slate);

        // Include 1 to all occurrences
        for (let i = 0; i < count; i++) {
            slate.push(sortedarr[index]);
            helper(sortedarr, index + count, slate);
        }

        // Backtrack
        for (let i = 0; i < count; i++) {
            slate.pop();
        }
    }

    helper(sortedarr, 0, []);
    return result;
}

console.log(unique_subset([1, 2, 1]));