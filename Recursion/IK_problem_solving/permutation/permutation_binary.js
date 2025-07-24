function enumeration_digital(n){
    let results = [];
    function helper(index,slate){
        if(index === n){
            results.push([...slate].join(''));
            return;
        }
      
             //exclude part
             slate.push(0);
            helper(index+1,slate);
            slate.pop();
            //include part
            slate.push(1);
            helper(index+1,slate);
            slate.pop();
       
    }
    helper(0,[]);
    return results;
}
console.log(enumeration_digital(3));