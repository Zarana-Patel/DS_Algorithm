function findKthLargest(nums, k) {
    return quickSelect(nums, 0, nums.length - 1, k - 1);
}

function quickSelect(arr, left, right, targetIndex) {
    if (left === right) return arr[left];

    const pivotIndex = partition(arr, left, right);

    if (pivotIndex === targetIndex) return arr[pivotIndex];
    else if (pivotIndex > targetIndex)
        return quickSelect(arr, left, pivotIndex - 1, targetIndex);
    else
        return quickSelect(arr, pivotIndex + 1, right, targetIndex);
}

function partition(arr, left, right) {
    const pivot = arr[right];
    let pIndex = left;

    for (let i = left; i < right; i++) {
        if (arr[i] >= pivot) { // for Kth largest
            [arr[i], arr[pIndex]] = [arr[pIndex], arr[i]];
            pIndex++;
        }
    }

    [arr[pIndex], arr[right]] = [arr[right], arr[pIndex]];
    return pIndex;
}
