function permutation_phonenum(s) {
    const digit_map = {
        "1": "",
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    if (!s) return [];

    let result = [];

    function helper(index, slate) {
        if (index === s.length) {
            result.push(slate.join(''));
            return;
        }

        let current_digit = s[index];
        let current_choices = digit_map[current_digit];

        if (!current_choices || current_choices.length === 0) {
            // Skip digits like "1"
            helper(index + 1, slate);
            return;
        }

        for (let i = 0; i < current_choices.length; i++) {
            slate.push(current_choices[i]);
            helper(index + 1, slate);
            slate.pop();
        }
    }

    helper(0, []);
    return result;
}

console.log(permutation_phonenum("2341567"));


