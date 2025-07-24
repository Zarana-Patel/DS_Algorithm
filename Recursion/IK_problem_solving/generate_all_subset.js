function generate_all_subsets(s) {
    let result = [];

    const helper = (index, slate) => {
        if (index === s.length) {
            result.push([...slate].join(''));
            return;
        }

        // Exclude the current character
        helper(index + 1, slate);

        // Include the current character (str[i])
        slate.push(s[index]);
        helper(index + 1, slate);
        slate.pop();

    };

    helper( 0, []);
    return result;
}

console.log( generate_all_subsets("abc"));