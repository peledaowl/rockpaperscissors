

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

function playRound(computerChoice, ) {
  let userChoice = prompt("What's your choice? Rock/Paper/Scissors").toLowerCase() // Getting user input in lowercase
  let userChoiceUpper = userChoice.charAt(0).toUpperCase() + userChoice.slice(1) // Making user input capitalized
  switch (computerChoice) { // Using two switches to compare computer choice and user choice. 
    case "Rock": // First the computer choice is taken and compared to user choice.
      switch (userChoice) {
        case 'rock':
          return [(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a draw!`), 'draw']
        case 'paper':
          return [(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a win!`), 'win']
        case 'scissors':
          return [(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a loss!`), 'loss']
        default:
          return ("Please enter valid value.") // This is output if user input is neither rock, paper or scissors
      }

    case "Paper":
      switch (userChoice) {
        case 'paper':
          return [(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a draw!`), 'draw']
        case 'scissors':
          return [(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a win!`), 'win']
        case 'rock':
          return [(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a loss!`), 'loss']
        default:
          return ("Please enter valid value.")
      }

    case "Scissors":
      switch (userChoice) {
        case 'scissors':
          return [(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a draw!`), 'draw']
        case 'rock':
          return [(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a win!`), 'win']
        case 'paper':
          return [(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a loss!`), 'loss']
        default:
          return ("Please enter valid value.")
      }
  }
}

function game(func) {
  let userScore = 0
  let computerScore = 0
  for(let i = 0; i <= 4; i++ ) { // Repeating the playRound function five times
    let funcCall = func() // Assign the result of the function to a variable
    if (funcCall[1] == 'win') { // If the result of the function is a win,
      userScore++; // Add to the user score,
      console.log(funcCall[0]) // Print result of the round
    } else if (funcCall[1] == 'draw') { // If the result of the function is a draw,
      i--; // Subtract from the loop counter
      console.log(funcCall[0]) // Print result of the round
    } else if (funcCall[1] == 'loss') { // If the result of the function is a loss,
      computerScore++; // Add to the computer score,
      console.log(funcCall[0]) // Print result of the round
    } else { // If the case was default (wrong input), 
      console.log(funcCall) // print result of the function
      i--; // Subtract from the loop counter
    }
  }
  if (userScore > computerScore) { // Comparing user and computer score and printing results of the game
    console.log(`The final score: \nUser: ${userScore}\nComputer: ${computerScore}\nYou won the game!`)
  } else if (userScore < computerScore) {
    console.log(`The final score: \nUser: ${userScore}\nComputer: ${computerScore}\nYou lost the game.`)
  } else if (userScore == computerScore) {
    console.log(`The final score: \nUser: ${userScore}\nComputer: ${computerScore}\nThe game is draw.`)
  }
}


game(() => playRound(getComputerChoice()));

