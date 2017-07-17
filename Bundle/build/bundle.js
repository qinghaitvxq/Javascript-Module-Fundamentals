/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logPlayer = logPlayer;
exports.default = setName;
exports.getName = getName;


//private members
var playerName = '';

function logPlayer() {
    console.log('The current player is ' + playerName);
}

function setName(newName) {
    playerName = newName;
}

function getName() {
    return playerName;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _player = __webpack_require__(0);

var _player2 = _interopRequireDefault(_player);

var _game = __webpack_require__(2);

var game = _interopRequireWildcard(_game);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('starting MultiMath with IIFE');

// add click handler to the start game button
document.getElementById('startGame').addEventListener('click', function () {
    (0, _player2.default)(document.getElementById('playername').value);
    game.printGame();
});

// add click handler to the calculate score button
document.getElementById('calculate').addEventListener('click', function () {
    game.calculateScore();
});

// set the default number of problems
document.getElementById('problemCount').value = game.getProblemCount();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getProblemCount = exports.setProblemCount = exports.calculateScore = exports.printGame = undefined;

var _player = __webpack_require__(0);

var _scoreboard = __webpack_require__(3);

var scoreboard = _interopRequireWildcard(_scoreboard);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//private members
var factorElement = document.getElementById("factor");
var problemsPerGame = 3;

function printGame() {
    (0, _player.logPlayer)();

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
    var problemsInGame = getProblemCount();
    var score = 0;

    for (var i = 1; i <= problemsInGame; i++) {
        var answer = document.getElementById('answer' + i).value;
        if (i * factorElement.value == answer) {
            score++;
        }
    }
    var result = {
        name: (0, _player.getName)(),
        score: score,
        problems: problemsInGame,
        factor: factorElement.value
    };
    // var scoreboard=new Scoreboard();
    scoreboard.addResult(result);
    scoreboard.updateScoreboard();

    document.getElementById('calculate').setAttribute('disabled', 'true');
}
function setProblemCount(newCount) {
    problemsPerGame = newCount;
}
function getProblemCount() {
    return problemsPerGame;
}

exports.printGame = printGame;
exports.calculateScore = calculateScore;
exports.setProblemCount = setProblemCount;
exports.getProblemCount = getProblemCount;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ })
/******/ ]);