
function permutation_str(arr){
    const result = [];
    function helper(arr,index,slate){
        console.log(arr,index,slate);
        if(index === arr.length){
            result.push([...slate]);
            return;
        }
        // console.log("before for i:",i);
        for(let i = index;i<arr.length;i++){
            // console.log("pick value :",arr[pick]);
            // console.log("arr[i] value:",arr[i]);
            [arr[i],arr[index]] = [arr[index],arr[i]];
            console.log(`i = ${i} index = ${index} after 1st swap`, arr)
            slate.push(arr[index]);
            helper(arr,index+1,slate);
            slate.pop();
            console.log(`i = ${i} index = ${index} Slate Pop `, slate);
            [arr[i],arr[index]] = [arr[index],arr[i]];
            console.log('after 2nd swap', arr)
        }
    }

    helper(arr,0,[]);
    return result;
}

console.log(permutation_str([1,2,3]));