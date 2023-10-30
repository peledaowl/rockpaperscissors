

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1) // Generating a random number from 1 to 3 inclusive
  switch (computerChoice) { // Assigning random rock, paper or scissors to computerChoice
    case 1:
      return "Rock"
    case 2:
      return 'Paper'
    case 3:
      return "Scissors"
  }
}

function playRound(userChoice, computerChoice) {
  const result = {
    Rock: {Rock: "draw", Paper: "loss", Scissors: "win"},
    Paper: {Rock: "win", Paper: "draw", Scissors: "loss"},
    Scissors: {Rock: "loss", Paper: "win", Scissors: "draw"}
  }

  const outcome = result[computerChoice][userChoice]
  const message = `User: ${userChoice}, Computer: ${computerChoice}. It's a ${outcome}!`

  return [message, outcome]
}

function scoreDisplay(score, choice){
  const result = playRound(choice, getComputerChoice());
  if (result[1] == 'win'){ score[0]++ }
  else if (result[1] == 'loss'){ score[1]++ }

  scoreResult.textContent = `User score: ${score[0]}, Computer score: ${score[1]}`
  roundResult.textContent = result[0]
  
  if (score[0] == 5){
    scoreResult.textContent = `User WON! User score: ${score[0]}, Computer score: ${score[1]}`
  } else if (score[1] == 5){
    scoreResult.textContent = `Computer WON! User score: ${score[0]}, Computer score: ${score[1]}`
  }
  container.appendChild(roundResult)
  container.appendChild(scoreResult)
}

const btnRock = document.querySelector('.btnRock')
const btnPaper = document.querySelector('.btnPaper')
const btnScissors = document.querySelector('.btnScissors')

let userScore = 0
let computerScore = 0
let scores = [userScore, computerScore]

const container = document.querySelector('.container')
const roundResult = document.createElement('p')
const scoreResult = document.createElement('p')

btnRock.addEventListener('click', () => {
  scoreDisplay(scores, 'Rock')
});


btnPaper.addEventListener('click', () => {
  scoreDisplay(scores, 'Paper')
});


btnScissors.addEventListener('click', () => {
  scoreDisplay(scores, 'Scissors')
});



