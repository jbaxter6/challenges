function aVeryBigSum(ar) {
    // first set a sum of 0.
    // then loop through array and add each iter to sum.
    let sum = 0;
    for(let i = 0; i < ar.length; i++){
        sum += ar[i];
    }
    return sum;
}

// input
// [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

// expected output
// 5000000015

