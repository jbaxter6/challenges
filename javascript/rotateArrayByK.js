var rotate = function(nums, k) {
    
    for (let i = 0; i < k; i++){
        nums.unshift(nums.pop())
    }
    return nums
};

// console.log(rotate([7,1,5,3], 2)) => [5, 3, 7, 1]
