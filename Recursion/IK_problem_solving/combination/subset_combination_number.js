function enumeration_digital(n){
    let results = [];
    function helper(index,slate){
        if(index === n){
            results.push([...slate]);
            return;
        }
      
             //exclude part
            helper(index+1,slate);
            //include part
            slate.push(index+1);
            helper(index+1,slate);
            slate.pop();
       
    }
    helper(0,[]);
    return results;
}
console.log(enumeration_digital(3));