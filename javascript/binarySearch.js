function binarySearch(array, target, min, max) {
	var tArray = array.slice();
	if (min === undefined) min = 0;
	if (max === undefined) max = array.length - 1;

	var guess = Math.floor(((max - min) / 2) + min);
	if (max <= min && tArray[guess] !== target) return null;
	else if (tArray[guess] === target) return guess;
	else if (tArray[guess] < target) return binarySearch(tArray, target, guess + 1, max);
	else return binarySearch(tArray, target, min, guess - 1);
};

let arr = [1,2,3,4,5,6,7,8,9]

binarySearch(arr, 4)