function compareTriplets(a, b) {
let scoreCard = [0,0];
    for(let i=0; i<a.length; i++){
            if (a[i] < b[i]){
                scoreCard[1] = scoreCard[1]+1
            } else if (a[i] > b[i]){
                scoreCard[0] = scoreCard[0]+1 
            }
    }
return scoreCard
}