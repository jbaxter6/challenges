function removeDupCharsInStr(str){
    // first convert string into an array
    // Convert array to a set
    // turn set into array again
    // join array
    let arr = str.split("")
    let mySet = newSet(arr)
    let answerArr = Array.from(mySet)
    let answer = answerArr.join("")
    
    if(str === answer){
        return true 
    } else {
        return false
    }
}