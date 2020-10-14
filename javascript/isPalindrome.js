function isPalindrome(x) {
let numCopy = x.toString().split("")
let reverseCopy = x.toString().split("").reverse()
let boolean = true
    for(let i = 0; i < numCopy.length; i++){
        if(numCopy[i] != reverseCopy[i]){
            boolean = false
        }
    }
return boolean
};

function isPalindrome(x){
let arr = x.split("")
let leng = arr.length 

for(let i = 0, j = leng - 1; i < leng; i++, j --){
    if(arr[i] != arr[j]){
    return false
    }
}
return true
}

// isPalindrome(-121)
// false

// isPalindrome(121)
// true

// isPalindrome(321)
// false
