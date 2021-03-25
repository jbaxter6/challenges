function split(inp) {

  let split_arr = inp.split("")
  let word_map = {}

  for(let i = 0; i < split_arr.length; i++){

    if(word_map[split_arr[i]] == undefined){
      word_map[split_arr[i]] = 1;
    } else {
      word_map[split_arr[i]] = word_map[split_arr[i]] + 1;
    }
  }

  let boo = true
  Object.values(word_map).forEach(v => {
    console.log(v)
   if(v > 1){
     boo = false
   } 
  })
  return boo
}

console.log(split("hello"))

console.log(split("hello world"))

console.log(split("hi"))
