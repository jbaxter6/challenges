function capSent(str){
    // first split the string
    // then create an array that maps through split string array and caps every first letter 
    // of word and adds the rest of each character after
    // then join that array

    let wordArr = str.split(' ')
    let capArr = wordArr.map(word => {
        return word[0].toUpperCase() + word.slice(1)
    })
    return capArr.join(" ")
    
}

let sentence = "hello my name is john"
capSent(sentence)