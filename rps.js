    
    
    // Create a function that asks the user for a choice, and store it in a variable named "userChoice"
    // userChoice is then stored in lowercase for further use
    function getUserChoice(){
        let userChoice = prompt("We are playing rock, paper, scissors. Your choice is:");
        return userChoice.toLowerCase();
    }

    
    // Create a function that gets a value between zero and two (considering array index constraints)
    function getComputerChoice(){
        // Create an array with 3 values [Rock, Paper scissors]
        const options = ["rock", "paper", "scissors"];
        // compChoice gets a random Math value and looks it up inside the array
        let compChoice = options.at(Math.floor(Math.random()*3));
        // value is returned as result of the function
        return compChoice;
    }

    console.log(getUserChoice());
    console.log(getComputerChoice());

    let userPlays = getUserChoice();
    let comPlays = getComputerChoice();

    // Create a function that plays a single round
    function playRound(playerSelection, computerSelection){
        let userPlays = getUserChoice();
        let compPlays = getComputerChoice();

        if(userPlays === "rock" && compPlays === "paper"){
            console.log("You loose!, paper beats rock");
        } else if(userPlays === "paper" && compPlays === "scissors") {
            console.log("You loose!, scissors beat paper");
        } else if(userPlays === "scissors" && compPlays === "rock") {
            console.log("You loose!, rock beats scissors");
        } else if(userPlays === "paper" && compPlays === "rock") {
            console.log("You win!, paper beats rock");
        } else if(userPlays === "rock" && compPlays === "scissors"){
            console.log("You win!, rock beats scissors");
        } else if(userPlays === "scissors" && compPlays  === "paper"){
            console.log("You win!, scissors beat paper");
        }
        return;
    }
    