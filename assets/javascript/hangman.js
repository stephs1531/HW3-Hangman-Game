//choosing a random word

//create an array of words
var words = ["beach", "ocean", "sand", "towel", "dolphin", "seashell"];

//get javascript ot pick one of these words


var word = words[Math.floor(Math.random() * words.length)];
console.log(word); //it works!

//create the answer array for the _ _ _ _ _
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
console.log(answerArray); //it works!

//create variable to keep track of letters that haven't been guessed yet
var lettersLeft = word.length;
console.log(lettersLeft); //it works!



// THE GAME LOOP

while (lettersLeft > 0) {
    //show player their progress
    var blankWord = document.getElementById("blankWord"); 
    // $(blankWord).html(answerArray.join(" "));
}