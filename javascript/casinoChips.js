// You are given three piles of casino chips: white, green and black chips:

// the first pile contains only white chips
// the second pile contains only green chips
// the third pile contains only black chips
// Each day you take exactly two chips of different colors and head to the casino. You can choose any color, but you are not allowed to take two chips of the same color in a day.

// You will be given an array representing the number of chips of each color and your task is to return the maximum number of days you can pick the chips. Each day you need to take exactly two chips.

function solve(arr){
    let sum = 0;
    arr.sort((a,b) => a - b);

    while(arr[0] != 0){
        sum++;
        arr[0]--;
        arr[2]--;
        arr.sort((a,b) => a - b);
    }
    return sum + arr[1];

    // alt solution

    // let result = arr.sort((a, b) => b - a)
    // let a = result[0]
    // let b = result[1]
    // let c = result[2]
    // if(a > (b+c)){
    //   return b+c
    // } else {
    //   return Math.floor((a+b+c) / 2)
    // }
}