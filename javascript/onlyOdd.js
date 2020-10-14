function onlyOdd(arr){
let oddObj = {}
let leng = arr.length
    
for(let i = 0; i < leng; i ++){
    if(oddObj[arr[i]]){
        delete oddObj[arr[i]]
    } else {
        oddObj[arr[i]] = 1
    }
}  
return Object.keys(oddObj)
}
    
let test1 = [1,1,1,3,3,5,6,6,6,6,7]
let test2 = [1, 1, 2, 3, 3, 3, 4, 4]

onlyOdd(test1)
// [ '1', '5', '7' ]
onlyOdd(test2)
// [ '2', '3' ]