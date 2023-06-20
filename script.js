// Define variables for the game
console.log("test");
let computerSelection;
let playerSelection;
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
console.log(getComputerChoice());
// Create function to play a single round
    //Get user's input (R/P/S)
    //Make the input case sensitive by lower it's case.
    //Get computer's choice
    //Combine
        //Tie (Using if)
        //Win or lose (Using switch)
    //Return the message value
// Create function to play 5 rounds in a row and return the final winner
