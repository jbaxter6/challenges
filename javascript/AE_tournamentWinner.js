function tournamentWinner(competitions, results) {
  // Write your code here.
  // [home,away]
  // [  1 , 0  ]
  // create a new object to keep track of wins
  // iterate through competions
  // if results[i] = 1 we create a key for competetion[i][0] or add one
  // if results[i] = 0 we create a key for competetion[i][1] or add one

  let winners = {}

  for (let i = 0; i < competitions.length; i++){
    if(results[i] == 0){
      if(winners[competitions[i][1]] == undefined){
        winners[competitions[i][1]] = 1
        console.log(i, winners, "if")
      } else {
        winners[competitions[i][1]] += 1
      }
    } else if(results[i] == 1){
      if(winners[competitions[i][0]] == undefined){
        winners[competitions[i][0]] = 1
        console.log(i, winners, "else if")
      } else {
        winners[competitions[i][0]] += 1
      }
    }
  }

  let high = 0
  let winner = ""

  // console.log(winners)
  Object.entries(winners).forEach( entry => {
    const [k, v] = entry
    if(v > high){
      high = v
      winner = k
    }
  })

  return winner
  
}

// tournamentWinner(
//   [
// 	["HTML", "C#"],
// 	["C#", "Python"],
// 	["Python", "HTML"]
// 	],
//   [1, 0, 0]
// )
