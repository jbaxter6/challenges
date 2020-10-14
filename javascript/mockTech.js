// given a length of a flight in minutes, and an array of movie lengths,
// return true if two different movies can be equal to exactly the flight length
// So findMovies(160, [80, 20, 40]) returns false 
// but findMovies(160, [80, 80, 60]) returns true

function findMovies(target, arr){
    // first we are going to create an object to store the complement of the iteration in the array.

    const compObj = {}
    const length = arr.length

    for(let i = 0; i < length; i++){
        if(compObj[arr[i]]){
            return true
        }
        compObj[target - arr[i]]
    }
    return false
}