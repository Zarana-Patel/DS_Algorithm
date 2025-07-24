function find_subset_str(s) {
    let result = [];
   
    const chars = s.split('').sort();
    const helper = (index, slate,excluded = null) => {
        if (index === s.length) {
            result.push([...slate].join(''));
            return;
        }
        // Exclude the current character
        helper(index + 1, slate, chars[index]);

       // exclude all other repetations
        if(chars[index]  === excluded) {
            return;
        }
        slate.push(chars[index]);
        helper(index + 1, slate);
        slate.pop();

    };

    helper( 0, []);
    return result;
}

// Example: Pass the string "xy"
console.log(find_subset_str("aab"));