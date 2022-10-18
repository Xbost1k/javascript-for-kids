// Создайте здесь свои функции
// word: загаданное слово
var word = pickWord();
console.log(word);
// answerArray: итоговый массив
var answerArray = setupAnswerArray(word);
// remainingLetters: сколько букв осталось угадать
var remainingLetters = word.length;
var miss = 6;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

while (remainingLetters > 0) {

    
    showPlayerProgress(answerArray); // сколько букв угадано
    
    //guess: ответ игрока
    var guess = getGuess(); // запрос на ввод буквы
    if (guess === null) { // если нажата отмена
        break;
    } else if (guess.length !== 1) { // если больше 2 букв
        alert("Пожалуйста, введите одиночную букву.");
    } else {
        // correctGuesses: количество открытых букв
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}

drawHuman(miss); // рисует части тела
showAnswerAndCongratulatePlayer(answerArray); // резултат игры


function drawHuman(miss) {
    ctx.lineWidth = 4;
    ctx.strokeStyle = "black";
    ctx.beginPath();

    if (miss === 5) {
        ctx.strokeRect(150, 10, 50, 50);
    } else if (miss === 4) {
        // голова
        ctx.strokeRect(150, 10, 50, 50);
        // тело
        ctx.moveTo(175, 60);
        ctx.lineTo(175, 150);
    } else if (miss === 3) {
        // голова
        ctx.strokeRect(150, 10, 50, 50);
        // тело
        ctx.moveTo(175, 60);
        ctx.lineTo(175, 150);
        // левая рука
        ctx.moveTo(175, 80);
        ctx.lineTo(125, 150);
    } else if (miss === 2) {
        // голова
        ctx.strokeRect(150, 10, 50, 50);
        // тело
        ctx.moveTo(175, 60);
        ctx.lineTo(175, 150);
        // левая рука
        ctx.moveTo(175, 80);
        ctx.lineTo(125, 150);
        // правая рука
        ctx.moveTo(175, 80);
        ctx.lineTo(225, 150);
    } else if (miss === 1) {
        // голова
        ctx.strokeRect(150, 10, 50, 50);
        // тело
        ctx.moveTo(175, 60);
        ctx.lineTo(175, 150);
        // левая рука
        ctx.moveTo(175, 80);
        ctx.lineTo(125, 150);
        // правая рука
        ctx.moveTo(175, 80);
        ctx.lineTo(225, 150);
        // правая нога
        ctx.moveTo(175, 150);
        ctx.lineTo(205, 240);
    } else if (miss < 0) {
        // голова
        ctx.strokeRect(150, 10, 50, 50);
        // тело
        ctx.moveTo(175, 60);
        ctx.lineTo(175, 150);
        // левая рука
        ctx.moveTo(175, 80);
        ctx.lineTo(125, 150);
        // правая рука
        ctx.moveTo(175, 80);
        ctx.lineTo(225, 150);
        // правая нога
        ctx.moveTo(175, 150);
        ctx.lineTo(205, 240);
        // левая нога
        ctx.moveTo(175, 150);
        ctx.lineTo(145, 240);
    }
    ctx.stroke();
}
function pickWord() {
    var word = [
        "л",
    ];
    return word[Math.floor(Math.random() * word.length)];
}
function setupAnswerArray(word) {
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = '_';
    }
    return answerArray;
}


function showPlayerProgress(answerArray) {
    alert(answerArray.join(' '));
}


function getGuess() {
    return prompt("Угадайте букву, или нажмите Отмена для выхода из игры.\nВы сделали ошибок: " + miss);
}

// проверяет есть ли буква в слове и возвращает кол-во угаданных букв
function updateGameState(guess, word, answerArray) {
    var count = 0;
    for (var i = 0; i < word.length; i++) {
        if (guess === word[i]) {
            answerArray[i] = guess;
            count++;
        } else {
            miss--;
        }
        
    }
    return count;
}

// показывает результат игры
function showAnswerAndCongratulatePlayer(answerArray) {
    alert("Отлично! Было загадано слово " + answerArray.join(''));
}

