

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1)
  switch (computerChoice) {
    case 1:
      return "Rock"
    case 2:
      return 'Paper'
    case 3:
      return "Scissors"
  }
}

function playRound(computerChoice) {
  let userChoice = prompt("What's your choice? Rock/Paper/Scissors").toLowerCase()
  let userChoiceUpper = userChoice.charAt(0).toUpperCase() + userChoice.slice(1)
  switch (computerChoice) {
    case "Rock":
      switch (userChoice) {
        case 'rock':
          return (`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a draw!`)
        case 'paper':
          return (`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a win!`)
        case 'scissors':
          return (`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a loss!`)
        default:
          return ("Please enter valid value.")
      }

    case "Paper":
      switch (userChoice) {
        case 'paper':
          return (`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a draw!`)
        case 'scissors':
          return (`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a win!`)
        case 'rock':
          return (`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a loss!`)
        default:
          return ("Please enter valid value.")
      }

    case "Scissors":
      switch (userChoice) {
        case 'scissors':
          return (`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a draw!`)
        case 'rock':
          return (`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a win!`)
        case 'paper':
          return (`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a loss!`)
        default:
          return ("Please enter valid value.")
      }
  }
}

function game(func) {
  for(let i = 0; i <= 4; i++ ) {
    console.log(func())
  }
}



game(() => playRound(getComputerChoice()));

