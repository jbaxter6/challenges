function repeats(arr){
    //..
let countObj = {}
    
for(let i = 0; i < arr.length; i ++){
    if(countObj[arr[i]]){
        countObj[arr[i]] = countObj[arr[i]] + 1
    } else {
        countObj[arr[i]] = 1
    }
}
    
let keys = Object.keys(countObj)
    
for(let i = 0; i < keys.length; i ++){
    if(countObj[keys[i]] > 1){
        delete countObj[keys[i]]
    }
}
    
keys = Object.keys(countObj)
    
return keys.reduce((a,b) => parseInt(a) + parseInt(b))
    
};

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15.