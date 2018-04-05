// dependencies requires
var inquirer = request("inquirer");

// console log to game start
console.log('Game Started!');

// grab random word

startGame();

function startGame() {
    var word = game.getWord();

    // show word in the console log
    word.display();

    // get the user's guess
    getUsersGuess(word);
}

// getting the user's guess
function getUsersGuess(){
    // prompting the user to guess a letter, changing to lowercase
    inquirer.prompt([{
        name: "letter",
        message: "Enter a letter.",
        validate: function (input){
            return (input.trim().toLowerCase());
        }
    }])

    // function holding an if/else statement to display word
    // and calls method to check if letter is in the word
}