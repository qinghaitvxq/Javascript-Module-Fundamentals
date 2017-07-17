
var player=require('./player.js');
var scoreboard=require('./scoreboard.js');


//private members
var factorElement=document.getElementById("factor");
var problemsPerGame=3;

function printGame() {
    player.logPlayer();

    setProblemCount(document.getElementById('problemCount').value);
    var gameForm = '';
    for (var i = 1; i <= problemsPerGame; i++) {
        gameForm += '<div class="form-group">';
        gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
        gameForm += factorElement.value + ' x ' + i + ' = </label>';
        gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
        gameForm += '</div>';
    }


    // add the new game to the page
    var gameElement = document.getElementById('game');
    gameElement.innerHTML = gameForm;

    // enable the calculate score button
    document.getElementById('calculate').removeAttribute('disabled');

}
function calculateScore() {
    var problemsInGame=getProblemCount();
    var score=0;

    for(var i=1;i<=problemsInGame;i++){
        var answer=document.getElementById(`answer${i}`).value;
        if(i* factorElement.value ==answer){
            score++;
        }
    }
    var result={
        name:player.getName(),
        score:score,
        problems:problemsInGame,
        factor:factorElement.value
    };
   // var scoreboard=new Scoreboard();
    scoreboard.addResult(result);
    scoreboard.updateScoreboard();

    document.getElementById('calculate').setAttribute('disabled', 'true');
}
function setProblemCount(newCount) {
    problemsPerGame=newCount;
}
function getProblemCount() {
   return problemsPerGame;

}

module.exports= {
    printGame: printGame,
    calculateScore: calculateScore,
    setProblemCount: setProblemCount,
    getProblemCount: getProblemCount
};

