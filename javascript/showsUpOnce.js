var singleNumber = function(nums) {
    
    let map = {}
    
    for (let i = 0; i < nums.length; i++) {
        if(map[nums[i]] == undefined){
            map[nums[i]] = 1
        } else {
            map[nums[i]] += 1
        }
    }
    
    let found = 0
    
    for (let [key, value] of Object.entries(map)){
        if (value == 1){
            found = key
        }
    }
    
    return found
};

// console.log(singleNumber([4,1,2,1,2])) => 4
