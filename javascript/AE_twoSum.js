function twoNumberSum(array, targetSum) {
  // Write your code here.
	// iterate through array and create a hash with the key
	// being the iteration and the value being the compliment
	// Once we have that iterate through hash and see if that iterated key/value pairs value is a key in the hash
let compMap = {}
let answer = []

for(let i = 0; i < array.length; i++){
    compMap[array[i]] = targetSum - array[i]
}
Object.entries(compMap).forEach(entry => {
const [key, value] = entry;
if(compMap[targetSum - key]){
  answer[0] = parseInt(key)
  answer[1] = targetSum - key
}
});

return answer
}
