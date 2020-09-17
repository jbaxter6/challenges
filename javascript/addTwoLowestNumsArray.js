function sumTwoSmallestNumbers(numbers) {  
    //Code here
    const twoNums = numbers.sort((a,b) => a - b).slice(0,2)
    const sum = twoNums.reduce((accumulator, currentValue) => accumulator + currentValue);
    
    return sum 
  }