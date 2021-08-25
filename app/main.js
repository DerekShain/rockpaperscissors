
function play(playerChoice) {
    let choice = computerChoice();
    displayChoice(choice);
    displayWinner(choice, playerChoice);
}

function computerChoice() {
    // let rps = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choice;
}

function displayChoice(choice){
    if (choice == 0) {
        let rockTemplate= `
        <div class= "col-md-4">
            <div class="card shadow align-items-center">
                <img src="https://static.wikia.nocookie.net/gensin-impact/images/c/cd/Item_Hiding_Grazestone.png" alt="rock" class="img-fluid">
                <div class="card-body">
                    <h3 class="text-center">Rock</h3>
                </div>
            </div>
        </div>`
        document.getElementById('computerChoice').innerHTML = rockTemplate;
    } else if(choice == 1) {
        let paperTemplate =`
        <div class= "col-md-4">
            <div class="card shadow align-items-center">
                <img src="https://static.wikia.nocookie.net/play-rust/images/9/96/Paper_icon.png" alt="paper" class="img-fluid">
                <div class="card-body">
                    <h3 class="text-center">Paper</h3>
                </div>
            </div>
        </div>`
        document.getElementById('computerChoice').innerHTML = paperTemplate;
    } else {
        let scissorTemplate=`
        <div class= "col-md-4">
            <div class="card shadow align-items-center">
                <img src="https://www.shareicon.net/data/128x128/2015/11/14/671808_tools_512x512.png" alt="scissors" class="img-fluid">
                <div class="card-body">
                    <h3 class="text-center">Scissors</h3>
                </div>
            </div>
        </div>`
        document.getElementById('computerChoice').innerHTML = scissorTemplate;
    }
}

function displayWinner(choice, playerChoice){
    let tieTemplate=`
            <div class= "col-md-4">
                <div class="card shadow align-items-center">
                    <div class="card-body">
                        <h3 class="text-center">Tie</h3>
                    </div>
                </div>
            </div>`

    let loseTemplate= `
            <div class = "col-md-4">
                <div class="card shadow align-items-center">
                    <div class="card-body">
                        <h3 class="text-center">You Lose!</h3>
                    </div>
                </div>
            </div>
            `
    let winTemplate=`
            <div class="col-md-4">
                <div class="card shadow align-items-center">
                    <div class="card-body">
                        <h3 class="text-center">You Win!</h3>
                    </div>
                </div>
            </div>`
    if (playerChoice == 0) {
        if(choice == 0){
            document.getElementById('messageArea').innerHTML = tieTemplate;
        }else if (choice == 1){
            document.getElementById('messageArea').innerHTML=loseTemplate;
        }else{
            document.getElementById('messageArea').innerHTML=winTemplate;
        }
    } else if (playerChoice == 1) {
        if(choice == 1){
            document.getElementById('messageArea').innerHTML = tieTemplate;
        }else if (choice == 2){
            document.getElementById('messageArea').innerHTML=loseTemplate;
        }else{
            document.getElementById('messageArea').innerHTML=winTemplate;
        }
    }else{
        if(choice == 2){
            document.getElementById('messageArea').innerHTML = tieTemplate;
        }else if (choice == 0){
            document.getElementById('messageArea').innerHTML=loseTemplate;
        }else{
            document.getElementById('messageArea').innerHTML=winTemplate;
        }
    }
}