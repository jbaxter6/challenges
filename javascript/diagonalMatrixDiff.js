function diagonalDifference(arr) {
    const dimension = arr[0].length;
    let first_diag_sum = 0;
    let second_diag_sum = 0;
    let sum = 0

    for(let i = 0, j = (dimension - 1); i < dimension, j > -1; i++, j--){
        first_diag_sum += arr[i][i];
        second_diag_sum += arr[i][j];
    }

    sum = first_diag_sum - second_diag_sum

    // returns absolute value of sum
    return Math.abs(sum)

}

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  

// The left-to-right diagonal = 1 + 5 + 9 = 15. 
// The right to left diagonal = 3 + 5 + 9 = 17. 
// Their absolute difference is | 15 - 17 | = 2.

// video helped
// https://www.youtube.com/watch?v=o1jPFxpAIZo