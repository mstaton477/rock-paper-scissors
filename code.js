let playerScore = 0 
let computerScore = 0 

const rock = document.getElementById('rock'); 
const paper = document.getElementById('paper'); 
const scissors = document.getElementById('scissors'); 
const resetButton = document.getElementById("reset-icon"); 

function computerPlay(){
    let computerRandomChoices = ['rock', 'paper', 'scissors']; 
    let getRandomChoices = Math.floor(Math.random()* computerRandomChoices.length)
    return computerRandomChoices[getRandomChoices]; 
}

function playRound(playerSelection, computerSelection){
    console.log('You selected: "${playerSelection}"'); 
    console.log('Computer selected: "${computerSelection]"'); 

    //tie 
    if(playerSelection === computerSelection){
        document.getElementById('game-result').innerHTML = "It's a tie! Play Again."; 
        document.getElementById('game-result').style.color = 'black'; 
    }
    //Rock beats Scissors 
    else if (playerSelection === 'rock'){
        if(computerSelection === 'scissors'){
            playerScore++; 
            document.getElementById('game-result').innerHTML = "You Win! Rock beat Scissors."; 
            document.getElementById('game-result').style.color = 'green'; 
            document.getElementById('human-score').innerHTML = playerScore; 
        }else{
            computerScore++; 
            document.getElementById('game-result').innerHTML = "You lose! Paper beats Rock.";
            document.getElementById('game-result').style.color = 'red'; 
            document.getElementById('robot-score').innerHTML = computerScore; 

        }
    }
    //Paper beats Rock
    else if(playerSelection === 'paper'){
        if(computerSelection === 'rock'){
            playerScore++; 
            document.getElementById('game-result').innerHTML = "You Win! Paper beats Rock."; 
            document.getElementById('game-result').style.color = 'green'; 
            document.getElementById('human-score').innerHTML = playerScore; 

        }else{
            computerScore++; 
            document.getElementById('game-result').innerHTML = "You Lose! Scissors beats Paper."; 
            document.getElementById('game-result').style.color = 'red'; 
            document.getElementById('robot-score').innerHTML = computerScore; 
        }
    }
    //Scissors beats Paper 
    else if (playerSelection === 'scissors'){
       if(computerSelection === 'paper'){
        playerScore++; 
        document.getElementById('game-result').innerHTML = "You Win! Scissors beats Paper."; 
        document.getElementById('game-result').style.color = 'green'; 
        document.getElementById('human-score').innerHTML = playerScore; 
       }else{
        computerScore++; 
        document.getElementById('game-result').innerHTML = "You lose! Rock beats Scissors."; 
        document.getElementById('game-result').style.color = 'red'; 
        document.getElementById('robot-score').innerHTML = computerScore; 
       }

    }

}

function game(playerChoice){
    let player = playerChoice; 
    let computer = computerPlay(); 

    playRound(player, computer); 

    if(playerScore == 5){
        document.getElementById('computer-play-result').innerHTML = "WINNER!!!"; 
        document.getElementById('computer-play-result').style.color = 'green'; 
        document.getElementById('computer-play-result').style.fontSize = '1.8em'; 
        document.getElementById('game-result').innerHTML = ""; 
    }else if(computerScore == 5){
        document.getElementById('computer-play-result').innerHTML = "The computer Wins"; 
        document.getElementById('computer-play-result').style.color = 'red'; 
        document.getElementById('computer-play-result').style.fontSize = '1.8em';
        document.getElementById('game-result').innerHTML = ""; 
    }
};

rock.addEventListener('click', () =>{
    game('rock'); 
}); 

paper.addEventListener('click', () =>{
    game('paper'); 
}); 
scissors.addEventListener('click', () => {
    game('scissors'); 
}); 

resetButton.addEventListener('click', function(){
    location.reload(); 
}); 