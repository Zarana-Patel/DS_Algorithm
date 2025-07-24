function height_checker(heights){
   
        let sorted_height =  [...heights].sort((a,b)=>a-b);

        let count = 0;
    for(let i=0;i<heights.length;i++){
        if(heights[i] !== sorted_height[i]){
            count++;
        }
    }
    return count;
}
console.log(height_checker([1,1,4,2,1,3]));

//Using count sort

function heightChecker(heights) {
    const count = new Array(101).fill(0); // Since 1 <= height <= 100
    for (let h of heights) {
        count[h]++;
    }

    let index = 0;
    let mismatch = 0;

    for (let h = 1; h <= 100; h++) {
        while (count[h]-- > 0) {
            if (heights[index] !== h) {
                mismatch++;
            }
            index++;
        }
    }

    return mismatch;
}

console.log(heightChecker([1, 1, 4, 2, 1, 3]));  // Output: 3
