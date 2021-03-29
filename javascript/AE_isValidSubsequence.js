function isValidSubsequence(array, sequence) {
  // Write your code here.
	// traverse through original array and keep track of a pointer on the sequence 
  // if next iteration of og array is equal to pointer add one to that pointer.
  // then if pointer is equal to sequences length we know its a valid subsequence.
	let pointer = 0
	for (let i = 0; i < array.length; i ++){
	  if(array[i] == sequence[pointer]){
	    pointer += 1
	  }
	}
	
	if(pointer == sequence.length){
	  return true
	} else {
	  return false
	}
}
