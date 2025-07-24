function combination(rowIndex,i){
    let count = 0;
        function helper(index,slate){
            if(slate.length === i){
                count++;
                return;
            }
            if(index === rowIndex){
                return;
            }
            helper(index+1,slate);
            slate.push(index+1);
            helper(index+1,slate);
            slate.pop()

        }
        helper(0,[]);
    
    return count;
}
function getRow(rowIndex) {
    const row = [];
    for (let i = 0; i <= rowIndex; i++) {
        row.push(combination(rowIndex, i));
    }
    return row;
}

console.log(combination(3,0));
console.log(combination(3,1));