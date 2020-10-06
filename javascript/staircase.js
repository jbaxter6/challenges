function staircase(n) {
const hash = '#'
    for(let i = 0; i <= n; i++){
        return hash.repeat(i).padStart(n)
        // .padStart starts char at number
    }  
}

// n = 3
//    #
//   ##
//  ###

// not 
// #
// ##
// ###