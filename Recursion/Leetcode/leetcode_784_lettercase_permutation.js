function letterCase(s){
    let result = [];
    function helper(s,index,slate){
        // Base case 
        if(index === s.length){
            result.push([...slate].join(''));
            return;
        }
        if(isNaN(s[index])){
            slate.push(s[index].toLowerCase());
            helper(s,index+1,slate);
            slate.pop();

            slate.push(s[index].toUpperCase());
            helper(s,index+1,slate);
            slate.pop();
        }
        else{
            slate.push(s[index]);
            helper(s,index+1,slate);
            slate.pop();
        }
    }
    helper(s,0,[]);
    return result;
}
console.log(letterCase("a1b2"));