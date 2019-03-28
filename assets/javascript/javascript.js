$(document).ready(function() {
    
    var numWins = 0;
    var triesLeft = 0;
    var userGuesses = 0;

   
    

    var words = ["beach", "ocean", "sand", "towel"]



    document.onkeyup = function(event) { //generate a random word from the list when user presses a key
        
        // var firstWord= words[0];
        // console.log(firstWord);
        
        var wordChoice = words[Math.floor(Math.random() * words.length)];
        console.log(wordChoice);
       if (wordChoice === "beach") {

       }



        if (userGuess === "b") {
            console.log("b");
        }
    }

});    



//function for start of game//
