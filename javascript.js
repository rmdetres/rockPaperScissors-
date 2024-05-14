function getComputerChoice() {

    let computerchoice = " ";
    let max = Math.floor(Math.random() * 3);
    
    switch(max){
        case 0:
        return computerchoice = "rock";
        break;

        case 1:
        return computerchoice = "scissors";
        break;
            
        case 2:
        return computerchoice = "paper";
        break;
    }
    
  }


function getHumanChoice(){
    let humanChoice = prompt("What's your sign?")
    return humanChoice;
}





function playTheGame(){
let humanScore = 0;
let ComputerScore = 0;

    for(i = 0; i <5; i++){

    let humanChoice = getHumanChoice() 
    let computerchoice = getComputerChoice() 

    if (humanChoice === computerchoice){
         console.log("it was a tie");
    } else if (humanChoice === "rock"){
        if (computerchoice === "paper"){
            ComputerScore++
            console.log( "you choose rock the computer choose paper you lose!");
        } else if (computerchoice === "scissors"){
            humanScore++
            console.log( "you choose rock the computer choose scissors you win!");
        }
    }else if (humanChoice === "paper"){
        if (computerchoice === "rock"){
            humanScore++;
            console.log( "you choose paper the computer choose rock you win!");
    } if (computerchoice === "scissors"){
        ComputerScore++;
        console.log( "you paper the computer chose scissors you lose!");
}}
else if(humanChoice === "scissors"){
    if(computerchoice === 'paper'){
        humanScore++;
        console.log( "you choose scissors the computer chose paper,you win!");
    } if (computerchoice === "rock"){
        ComputerScore++;
        console.log( "you choose scissors the computer choose rock you lose!");
    }
}

    console.log(`your score is ${humanScore} and the computer score is ${ComputerScore}`)
    }


}


playTheGame();