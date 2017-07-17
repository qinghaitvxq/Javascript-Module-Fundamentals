'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

console.log('Creating a scoreboard (es6 module format)');

var results = [];
function addResult(newResult) {
    results.push(newResult);
}

function updateScoreboard() {

    var output = '<h2>Scoreboard</h2>';
    for (var index = 0; index < results.length; index++) {
        var result = results[index];
        // output += '<h4>';
        // output += result.name + ': ' + result.score + '/' + result.problems + ' for factor ' + result.factor;
        // output += '</h4>';
        output += '<h4>' + result.name + ':' + result.score + '/' + result.problems + ' for factor' + result.factor + '</h4>';
    }

    var scoresElement = document.getElementById('scores');
    scoresElement.innerHTML = output;
}

exports.addResult = addResult;
exports.updateScoreboard = updateScoreboard;