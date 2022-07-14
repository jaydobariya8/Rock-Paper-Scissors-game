//  Rock, Paper, Scissors

function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomNumGen());
    results = decidewinner(humanChoice, botChoice);
    message = finalMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, message);

}
function randomNumGen() {
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}
function decidewinner(yourChoice, comChoice) {
    var rpsDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
    };
    var yourScore = rpsDatabase[yourChoice][comChoice];
    var botScore = rpsDatabase[comChoice][yourChoice];
    return [yourScore, botScore];
}
function finalMessage([yourScore, botScore]) {
    if (yourScore === 0) {
        return { 'message': 'You lost..!', 'color': 'red' };
    }
    else if (yourScore === 0.5) {
        return { 'message': 'You tied..!', 'color': 'yellow' };
    }
    else {
        return { 'message': 'You won..!', 'color': 'green' };
    }
}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humenDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humenDiv.innerHTML = "<img src='"+ imageDatabase[humanImageChoice]+"' hight=150 width=150 >";
    messageDiv.innerHTML ="<h1 style='color:" +finalMessage['color']+ "; padding:30px; '>"+ finalMessage['message']+"<h1>"
    botDiv.innerHTML = "<img src='"+ imageDatabase[botImageChoice]+"' hight=150 width=150>";

    document.getElementById('flex_container_id').appendChild(humenDiv);
    document.getElementById('flex_container_id').appendChild(messageDiv);
    document.getElementById('flex_container_id').appendChild(botDiv);
}


