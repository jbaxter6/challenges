function reverse(x) {
    // first take integer and convert to string
    // then split string into an array
    // then get array length
    // newArr=[]
    // for loop set i = length, while i is greater then or = 0, decrement i
    // push arr[i] into newArr
    // then join newarr
    
    let arr = x.toString().split("")
    const length = arr.length - 1;
    let newArr = []
    let newNum = 0

    for(i = length; i >= 0; i--)
    if(arr[i] === '-'){
      newArr.unshift(arr[i])
    } else {
      newArr.push(arr[i])
    }

    newNum = newArr.join("")

    if( (newNum > (2 ** 31 - 1)) || (newNum < -2147483648) ) {
      return 0
    } else {
      return newNum
    }
    
};