function permutation_phonenum(s){
    const digit_map = { "2":"abc","3":"def","4":"ghi","5":"jkl","6":"mno","7":"pqrs","8":"tuv","9":"wxyz"};
    if(!s){
        return [];
    }
    let result = [];
    function helper(index,slate){
        if(index == s.length){
            result.push([...slate].join(''));
            return;
        }
        current_digit = s[index];
        cur_letter_choices = digit_map[current_digit];
        for(let i =0;i<cur_letter_choices.length;i++){
            slate.push([cur_letter_choices[i]]);
            helper(index+1,slate);
            slate.pop();
        }
    }
    
helper(0,[]);
return result;

}

console.log(permutation_phonenum("234"));