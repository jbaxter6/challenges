function isInMiddle(seq) {
    let middle = Math.floor(seq.length/2)
    let middle2 = Math.floor(seq.length/2) - 1
        if(seq.length % 2 !== 0) {
            if(seq[middle] === 'b' && seq[middle - 1] === 'a' && seq[middle + 1] === 'c') {
            return true
            }
        } else {
            if(seq[middle] === 'b' && seq[middle - 1] === 'a' && seq[middle + 1] === 'c') {
                return true
            } else if(seq[middle2] === 'b' && seq[middle2 -1] === 'a' && seq[middle2 + 1] === 'c') {
                return true
            }
        } 
        
        return false

}
    //   let arr = seq.split('');
    //   let disToMidd = Math.floor(arr.length / 2);
    // //   console.log(arr);
    // //   console.log(arr[disToMidd])
    //   if(arr[disToMidd] === "b" && arr[disToMidd - 1] === "a"  && arr[disToMidd + 1] === "c"){
    // //     console.log('1')
    //     return true
    //   } else if (arr[disToMidd] === "a" && arr[disToMidd + 1] === "b" && arr[disToMidd + 2] === "c" && arr.length % 2 == 0) {
    // //     console.log('2')
    //     return true
    //   } else if (arr[disToMidd] === "c" && arr[disToMidd - 1] === "b" && arr[disToMidd - 2] === "a" && arr.length % 2 == 0) {
    // //     console.log('3')
    //     return true
    //   } else {
    //     return false
    //   }