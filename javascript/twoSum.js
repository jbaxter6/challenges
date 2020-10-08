// good video : https://www.youtube.com/watch?v=_CoCO62fn_E

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].


function twoSums(nums, target){
    
    const comp = new Map();
    const leng = nums.length;

    for(let i = 0; i < leng; i++){
        
        if(comp[nums[i]] >= 0){
            return [comp[nums[i]], i]
        }

        comp[target - nums[i]] = i
    }

    return []
}