  // Get pointers for left and right side of array
  // compare left pointer to right pointer
  // if left pointer is greater than right pointer we are 
  // going to add that at end of array and square it
  // once we do that we add 1 to left pointer
  // right side we will do the opposite
function sortedSquaredArray(array) {
  // O(n)
  let left_p = 0
  let right_p = array.length - 1
  let new_array = []

  for(let i = array.length - 1; i >= 0; i--){
    if(Math.abs(array[left_p]) > Math.abs(array[right_p])){
      new_array[i] = array[left_p] * array[left_p]
      left_p += 1
    } else {
      new_array[i] = array[right_p] * array[right_p]
      right_p -= 1
    }
  }
  return new_array
}

  // iterate through each index of array and make that index equal 
  // the squared amount of index then sort it
function sortedSquaredArray(array) {
  // O(nlogn)

  for (let i = 0; i < array.length; i ++) {
    array[i] = array[i] * array[i]
  }

  return array.sort((a,b) => a-b)
}

// sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])
// sortedSquaredArray([-10, -5, 0, 5, 10])
