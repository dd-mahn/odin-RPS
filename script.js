// Define variables for the game
    
let computerSelection;
let playerSelections = document.querySelectorAll('#play-btn');
let score = 0;
let scoreDisplay = document.querySelector('.score');
let result = document.querySelector('.result');

// Create function on click event to play the game
playerSelections.forEach(playerSelection => playerSelection.addEventListener('click',() => {
    //reset result 
    result.textContent = "";
    //get player input and make it case sensitive
    let playerSelectionTxt = playerSelection.textContent;
    let playerSelectionSens = playerSelectionTxt.toLowerCase();
    //play game and show result
    result.textContent += playRound(playerSelectionSens);
    //change and display score
    score += result.textContent[0] === "Y" ? 1 : result.textContent[0] === "S" ? -1 : 0;
    if(scoreDisplay.textContent.length == 12){
        scoreDisplay.textContent += score;
    }else if(scoreDisplay.textContent.length >= 12){
        scoreDisplay.textContent = "Your score: ";
        scoreDisplay.textContent += score;
    }
    //display when player win the game
    if(score >= 5){
        result.textContent = "Congrats! You defeated the evil machine!";
    }

}));

// Create function to get computer's choice
function getComputerChoice(){
    //Random index from 1 to 3 
    let compIndex = Math.floor(Math.random() * 3);
    //Assign each index with R/P/S
    let choices = ["rock","paper","scissor"];
    let compChoices = choices[compIndex];
    //Return the choice
    return compChoices;
}

// Create function to play a single round
function playRound(playerSelectionSens,computerSelection){
    computerSelection = getComputerChoice();
    //Combine
        //Tie (Using if)
    if(playerSelectionSens === computerSelection){
        return "It's a tie!";
    }
        //Win or lose (Using switch)
    switch(true){
        case playerSelectionSens === "rock" && computerSelection === "scissor":
        case playerSelectionSens === "paper" && computerSelection === "rock":
        case playerSelectionSens === "scissor" && computerSelection === "paper":
            return `You won! ${playerSelectionSens} > ${computerSelection} `;
            break;

        default:
            return `Sorry, you loss! ${playerSelectionSens} < ${computerSelection}`;
    }
}