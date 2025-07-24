function missingNumber(nums) {
    const n = nums.length;
    let expectedSum = (n * (n + 1)) / 2; //Gauss' Sum Formula
    let actualSum = 0;

    for (let i = 0; i < n; i++) {
        actualSum += nums[i];
    }

    return expectedSum - actualSum;
}
console.log(missingNumber([9,6,2,5,1,3,7,0,4]));