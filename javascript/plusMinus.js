function plusMinus(arr) {
    let length = arr.length
    let posNum = 0
    let negNum = 0
    let zerNum = 0

    for(let i = 0; i < arr.length; i ++){
        if ( arr[i] < 0 ) {
            negNum += 1
        } else if ( arr[i] > 0 ) {
            posNum += 1
        } else if ( arr[i] === 0 ) {
            zerNum += 1
        }
    }

    posNum = ( posNum / length ) 
    negNum = ( negNum / length )
    zerNum = ( zerNum / length )

    return [posNum.toFixed(6), negNum.toFixed(6), zerNum.toFixed(6)]
}

// arr = [1, 1, 0, -1, -1]

// There are  n = 5 elements, two positive, two negative and one zero. 
// Their ratios are 2/5 = .400000, 2/5 = .400000, and 1/5 = .200000. 
