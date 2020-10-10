function countVowels(str){
let vowels = ‘aeiouAEIUO’
let stringArray = str.split("")
let numberVowels = 0

    for (let i = 0;i < stringArray.length; i++){
	    if(vowels.indexOf(stringArray[i]) !== -1){
	    numberVowels++
        }	
    }

return numberVowels;

}