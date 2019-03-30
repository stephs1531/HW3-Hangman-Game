
    
//     var numWins = 0;
//     var triesLeft = 0;
//     var userGuesses = 0;

var words = ["beach", "ocean", "sand", "towel", "dolphin", "seashell"];    

const totalGuesses = 10;
console.log(totalGuesses);

    var lettersGuessed = []; //stores the letters user has already guessed
    var wordIndex; //index of current word in the array
    var currentWord = [] //word user is making that matches chosen word
    var guessesLeft = 0 //how many guesses user has left
    var wins = 0; //how many times player has won
    var gameBegin = false; //determine if game has started
    var gameOver = false; //end game and try again
    

    //Reset game at beginning
    
    function resetGame() {
        guessesLeft = totalGuesses;
        console.log(guessesLeft);
        gameBegin = false;

        wordIndex = Math.floor(Math.random() * (words.length)); //get random number and round down to nearest whole to choose word from array
        console.log(wordIndex);

        //Clear out arrays of any values from previous game
        lettersGuessed = [];
        currentWord = [];

        //Build word we're trying to guess and replace letters with "_"
        for (var i = 0; i < words[wordIndex].length; i++) {
            currentWord.push("_");
        }

        //if you want -- hide whatever text/images you use to show game over or win
        // document.getElementById("id-name").style.cssText= "display: none";   ---  do this for whatever text/image you choose to show

        //update information that is shown on the page
        function reloadStats() {
            document.getElementById("wins").text = wins;
            console.log(wins);
            document.getElementById("triesLeft").innerText = totalGuesses - guessesLeft;
            console.log(totalGuesses - guessesLeft);
            document.getElementById("guesses").text = lettersGuessed;
            document.getElementById("blankWord").innerText = "";
            for (var i = 0; i < currentWord.length; i++) {
                document.getElementById("blankWord").innerText += currentWord[i];
            }
            if (guessesLeft <= 0) {
                gameOver = true;
            }
        }
  
    }

    function userGuess(letter) {
        if (guessesLeft > 0) {
            if (!gameBegin) {
                gameBegin = true;
            }
            if (lettersGuessed.indexOf(letter) === -1) {
                lettersGuessed.push(letter);
                searchCurrentWord(letter);
                }
            }
        reloadStats();
        };
    // capture keypress from user

    document.onkeypress = function(event) {
        if(gameOver) {
            resetGame();
            gameOver = false;
        } else {
            if(event.keyCode >= 65 && event.keyCode <=90) {
            userGuess(event.key.toLowerCase())
            reloadStats();
            }
        }
    }




    
//     //Choose a random word
//     var words = ["beach", "ocean", "sand", "towel"];
//     //Pick a random word from the array
//     var word = words[Math.floor(Math.random() * words.length)];
//     console.log(word);

//     //Create answer array that's empty for user guesses and fill it with the number of "_" that match the random word
//     var userGuesses = [];
//     for (var i = 0; i < word.length; i++) { //user for loop to set a _ for each letter in the chosen word
//         userGuesses.push('_');
//     }
//     console.log(userGuesses);

//     //set variable for remaining letters to be guessed 
//     var lettersLeft = 10;
//     console.log(lettersLeft);

//     document.onkeyup = function(event) {
//         //user guesses a letter
//         var letterGuess = event.key;
//         console.log("User Guess " + letterGuess);
       

//     //Set loop for game
//        while (lettersLeft > 0) {
               
//         // if (letterGuess === null) {
//         //     break;
//         // } else {
//                     for (var j = 0; j < word.length; j++) {
//                     if (word[j] === letterGuess) {
//                         userGuesses[j] = letterGuess;
//                         lettersLeft--;
//                     } 
                
//                 }
//             }
                
//             }
//             console.log(userGuesses);
//                 console.log(lettersLeft);


    

// //     document.onkeyup = function(event) { //generate a random word from the list when user presses a key
        
// //         // var firstWord= words[0];
// //         // console.log(firstWord);
        
// //         var wordChoice = words[Math.floor(Math.random() * words.length)];
// //         console.log(wordChoice);
// //        if (wordChoice === "beach") {

// //        }



// //         if (userGuess === "b") {
// //             console.log("b");
// //         }
// //     

   



// //function for start of game//
