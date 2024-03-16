const rulesButton = document.getElementById('rules');
const popup = document.getElementById('popup');

rulesButton.addEventListener('click', function() {
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'block';
    }
});

// closeButton.addEventListener('click', function() {
//     popup.style.display = 'none';
// });

window.onload = function() {
    if (window.location.pathname.includes('result.html')) {
    var userChoice = localStorage.getItem('userChoice');
    var computerChoice = localStorage.getItem('computerChoice');
    var results = '';
    var yourScore = localStorage.getItem('yourScore');;
    var computerScore = localStorage.getItem('computerScore');;

    if (userChoice === computerChoice) {
        results = 'It\'s a tie!';
    } else if ((userChoice === 'Stone' && computerChoice === 'Scissor') ||
            (userChoice === 'Paper' && computerChoice === 'Stone') ||
            (userChoice === 'Scissor' && computerChoice === 'Paper')) {
        results = 'You win!';
        yourScore++;
        localStorage.setItem('yourScore', yourScore);
    } else {
        results = 'Computer wins!';
        computerScore++;
        localStorage.setItem('computerScore', computerScore);
    }
    localStorage.setItem('results', results);

        var resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
        <div class="result-panel">
            <div class="stone-scissor">
                <div class="stone-inner" id="stone">
                    <img src="img/${userChoice}.svg" alt="${userChoice}"> 
                </div> 
                <div class="mid-section">
                    <h3 id="result">${localStorage.getItem('results')}</h3>
                    <br>
                    <button onclick="playAgain()">Play Again</button>
                </div>
                <div class="scissor-inner" id="scissor">
                    <img src="img/${computerChoice}.svg" alt="${computerChoice}">
                </div> 
            </div>
        </div>
        `;

        document.getElementById("yourScore").innerText = localStorage.getItem('yourScore');
        document.getElementById("computerScore").innerHTML = localStorage.getItem('computerScore');
        if(localStorage.getItem('results')=='You win!'){
            var nextDiv = document.getElementById('next');
            nextDiv.innerHTML = `
        <div class="result-panel">
            <div class="stone-scissor">
                <div class="mid-section">
                    <button onclick="final()">Next</button>
                </div>
            </div>
        </div>
        `;
        }
        
}
else{
    document.getElementById("yourScore").innerText = localStorage.getItem('yourScore');
    document.getElementById("computerScore").innerHTML = localStorage.getItem('computerScore');
}
}
function playGame(choice) {
    localStorage.setItem('userChoice', choice);
    var choices = ['Stone', 'Paper', 'Scissor'];
    var computerChoice = choices[Math.floor(Math.random() * 3)];
    localStorage.setItem('computerChoice', computerChoice);
}
function playAgain() {
    window.location.href = "index.html";
}
function final() {
    localStorage.setItem('yourScore', 0);
    localStorage.setItem('computerScore', 0);
    window.location.href = "final.html";
}

