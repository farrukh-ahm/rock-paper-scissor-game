/// Calling the elements

let buttons = document.getElementsByTagName("button");
let playerArea = document.getElementById("player-area");
let playerImage = document.getElementById("player-decision");
let aiArea = document.getElementById("ai-area");
let aiImage = document.getElementById("ai-decision");
let message = document.getElementById("result");
let decisions = ["rock", "paper", "scissor", "paper", "rock", "scissor"];

for (let button of buttons){
    button.addEventListener("click", function(){
        if (this.getAttribute("data-deci") === "rock"){
            rock();
        }
        else if (this.getAttribute("data-deci") === "paper"){
            paper();
        }
        else{
            scissor();
        }
    })
}

// function aiDecision(randomNumber) {
    
// }

function displayResult(result) {
    if (result === "lost"){
        message.innerHTML = `<h2>You Lost!</h2>`;
        message.style.color = "red";
    }
    else if (result === "won"){
        message.innerHTML = `<h2>You Won!</h2>`;
        message.style.color = "yellow";
    }
    else{
        message.innerHTML = `<h2>It's a Tie!</h2>`;
        message.style.color = "green";
    }
}

function rock(){
    let numberGen = Math.floor(Math.random() * 7)
    let aiDecision = decisions[numberGen]
    playerImage.src = `./assets/images/rock.png`;
    playerImage.alt = "rock";
    aiImage.src = `./assets/images/${aiDecision}.png`;
    aiImage.alt = `${aiDecision}`;
    if (aiDecision === "paper"){
        displayResult("lost")
    }
    else if (aiDecision === "scissor"){
        displayResult("won")
    }
    else if (aiDecision === "rock"){
        displayResult("tied")
    }
}

function paper() {
    let numberGen = Math.floor(Math.random() * 7);
    let aiDecision = decisions[numberGen];
    playerImage.src = `./assets/images/paper.png`;
    playerImage.alt = "rock";
    aiImage.src = `./assets/images/${aiDecision}.png`;
    aiImage.alt = `${aiDecision}`;
    if (aiDecision === "paper"){
        displayResult("tied")
    }
    else if (aiDecision === "scissor"){
        displayResult("lost")
    }
    else if (aiDecision === "rock"){
        displayResult("won")
    }
}

function scissor() {
    let numberGen = Math.floor(Math.random() * 7);
    let aiDecision = decisions[numberGen];
    playerImage.src = `./assets/images/scissor.png`;
    playerImage.alt = "rock";
    aiImage.src = `./assets/images/${aiDecision}.png`;
    aiImage.alt = `${aiDecision}`;
    if (aiDecision === "paper"){
        displayResult("won")
    }
    else if (aiDecision === "scissor"){
        displayResult("tied")
    }
    else if (aiDecision === "rock"){
        displayResult("lost")
    }
}


