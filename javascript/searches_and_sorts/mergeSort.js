function findMinAndRemoveSorted(array){
    let min = array[0]
    let minIndex = 0

    for(let i = 0; i < array.length; i ++){
        if(array[i] < min){
            min = array[i]
            minIndex = i
        }
    }

    array.splice(minIndex, 1)
    return min
}

function merge(firstHalf, secondHalf){
    let sorted = []

    while(firstHalf.length != 0 && secondHalf.length != 0){
        if(firstHalf[0] < secondHalf[0]){
            sorted.push(findMinAndRemoveSorted(firstHalf))
        } else {
            sorted.push(findMinAndRemoveSorted(secondHalf))
        }
    }

    return sorted.concat(firstHalf).concat(secondHalf)
}

function mergeSort(array) {
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
    let sorted;

    if(array.length < 2){
        return array
    } else {
        sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
    return sorted
}
