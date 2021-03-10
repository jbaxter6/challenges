//In the army, each soldier has an assigned rank. A soldier of rank X has to report to (any) soldier of rank X+1. Many soldiers can report to the same superior. Write a function:
//function solution(ranks); that given an array ranks consisting of soldiers' ranks, returns the number of soldiers who can report to some superior.

//Examples:
//1. Given ranks = [3,4,3,0,2,2,3,0,0], your function should return 5, because:
//- Three soldiers of rank 3 (ranks[0], ranks[2], ranks[6]) may report to a soldier of rank 4 (ranks[1]).
//- Two soldiers of rank 2 may report to any soldier of rank 3.
// Given ranks = [4,2,0], your function should return 0.
// Given ranks = [4,4,3,3,1,0] , your function should return 3, because :
//A soldier of rank 0 can report to a soldier of rank 1.
//Two soldiers of rank 3 can report to any soldier of rank 4.
//Write a efficient algorithm for the following assumptions:
//-N is an integer within the range [2..100,000];
//-each element of array ranks is an integer within the range [0..1,000,000,000].

function solution(ranks) {
    // write your code in JavaScript (Node.js 8.9.4)
 // turn array into object and set a key for each iterated item 
  // if key exists and that key + 1
  let newObject = {}
  let total = 0

  for (let i=0; i < ranks.length; i++) {
    if (newObject[ranks[i]] == undefined) {
    newObject[ranks[i]] = 1
    } else {
      // console.log(ranks[i])
      newObject[ranks[i]] = newObject[ranks[i]] + 1
    }
  }
  
  // iterate through object and see if there is a key that is the iterated
  // key + 1
  Object.keys(newObject).forEach(k => {
    let j = parseInt(k) + 1;
    
    if(newObject[j]){
      total = total + newObject[k]
    }
  
  })

  return total
}

let r = [4, 2, 0]
let r1 = [4,4,3,3,1,0]
let r2 = [3,4,3,0,2,2,3, 0, 0]

solution(r)
