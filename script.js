

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
  switch (computerChoice) { // Using two switches to compare computer choice and user choice. 
    case "Rock": // First the computer choice is taken and compared to user choice.
      switch (userChoice) {
        case 'Rock':
          return [(`User: ${userChoice}\nComputer: ${computerChoice}\nIt's a draw!`), 'draw']
        case 'Paper':
          return [(`User: ${userChoice}\nComputer: ${computerChoice}\nIt's a win!`), 'win']
        case 'Scissors':
          return [(`User: ${userChoice}\nComputer: ${computerChoice}\nIt's a loss!`), 'loss']
      }

    case "Paper":
      switch (userChoice) {
        case 'Paper':
          return [(`User: ${userChoice}\nComputer: ${computerChoice}\nIt's a draw!`), 'draw']
        case 'Scissors':
          return [(`User: ${userChoice}\nComputer: ${computerChoice}\nIt's a win!`), 'win']
        case 'Rock':
          return [(`User: ${userChoice}\nComputer: ${computerChoice}\nIt's a loss!`), 'loss']
      }

    case "Scissors":
      switch (userChoice) {
        case 'Scissors':
          return [(`User: ${userChoice}\nComputer: ${computerChoice}\nIt's a draw!`), 'draw']
        case 'Rock':
          return [(`User: ${userChoice}\nComputer: ${computerChoice}\nIt's a win!`), 'win']
        case 'Paper':
          return [(`User: ${userChoice}\nComputer: ${computerChoice}\nIt's a loss!`), 'loss']
      }
  }
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



