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

// isPalindrome(-121)
// false

// isPalindrome(121)
// true

// isPalindrome(321)
// false
