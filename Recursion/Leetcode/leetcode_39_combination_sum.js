function combination_sum(arraylist,targetSum){
    let result = [];
    function helper(arraylist,index,currentsum,slate){
        if(currentsum === targetSum){
            result.push([...slate]);
            return;
        }
           if(index === arraylist.length || currentsum > targetSum){
            return;
        }

        // exclude choice
        helper(arraylist,index+1,currentsum,slate);
        
        //include choice
        slate.push(arraylist[index]);
        helper(arraylist,index,currentsum+arraylist[index],slate);
        slate.pop();
    }
    helper(arraylist,0,0,[]);
    return result;

}
console.log(combination_sum([2,3,6,7],7));