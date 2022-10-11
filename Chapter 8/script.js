// Создайте здесь свои функции
// word: загаданное слово
var word = pickWord();
console.log(word);
// answerArray: итоговый массив
var answerArray = setupAnswerArray(word);
// remainingLetters: сколько букв осталось угадать
var remainingLetters = word.length;

while (remainingLetters > 0) {

    showPlayerProgress(answerArray);
    //guess: ответ игрока
    var guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
    } else {
        // correctGuesses: количество открытых букв
        var correctGuesses = updateGameState(guess, word, answerArray); 
        remainingLetters -= correctGuesses;
        console.log(remainingLetters)
    }
}

showAnswerAndCongratulatePlayer(answerArray);

function pickWord() {
    var word = [
        "лес",
        "заяц",
        "баран"
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
    return prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
}
function updateGameState(guess, word, answerArray) {
    var count = 0;
    for (var i = 0; i < word.length; i++) {
        if (guess === word[i]) {
            answerArray[i] = guess;
            count++;
        }
    }
    return count;
}
function showAnswerAndCongratulatePlayer(answerArray) {
    alert("Отлично! Было загадано слово " + answerArray.join(''));
}