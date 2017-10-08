    // Array of words
    var words = ["ocean", "sand", "starfish", "seashell", "waves", "sand castle", "beach", "sun", "seaweed", "palm tree",
    "coconut", "umbrella", "sunscreen", "snorkel"];

    var currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    console.log(currentWord);

    
    var guessesLeft = 10;
    document.getElementById("guesses-left").textContent = "Guesses Left: " + guessesLeft;

    // wins
    var wins = 0;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    //losses
    var loss = 0;
    document.getElementById("losses").innerHTML = "Losses: " + loss;

    var resetLettersGuessed = "Letters Guessed: "

   
    var progressWord = [];

    var mysteryWord = [];
    var i;
 
    for (i = 0; i < currentWord.length; i++) {
        progressWord.push("__");
    }
    document.getElementById("word-guess").innerHTML = progressWord.join(" ");

    function letterInWord(letter) {
        
        var positions = new Array();
        for (i = 0 ; i < currentWord.length; i++) {
            if (currentWord[i] === letter)
                positions.push(i);
        }
        return positions
    }

    
    function lettersToGuess() {
        var i ;
        var toGess = 0 ;
        for (i in progressWord) {
            if (progressWord[i] === "__")
                toGess++;
        }
        return toGess;
    }

    
    document.onkeyup = function (event) {
        var letter = event.key;
        var lettersGuessed = letter.toLocaleUpperCase();
        var i;
console.log(letter)

        var positions = letterInWord(lettersGuessed);


        
        if (positions.length) {

            for (i = 0 ; i < positions.length; i++) {
                progressWord[positions[i]] = lettersGuessed;
            }

            
            document.getElementById("word-guess").innerHTML = progressWord.join(" ");
        } else {
            document.getElementById("letters-guessed").innerHTML += lettersGuessed + " ";

            
            guessesLeft--;
            document.getElementById("guesses-left").textContent = "Guesses Left: " + guessesLeft;
        }


        if (guessesLeft === 0) {
   
            
            loss = loss + 1;
            
            document.getElementById("losses").innerHTML = "Losses: " + loss;
            
            guessesLeft = 10;
            
            document.getElementById("letters-guessed").innerHTML = resetLettersGuessed;
            
            currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
            
            progressWord = [];
            for (i = 0; i < currentWord.length; i++) {
            progressWord.push("__");
        }



        }

        
        if (lettersToGuess() == 0) {

        	alert("You Deserve a day on the beach!");
            




           //RESET
            guessesLeft = 10;
            document.getElementById("guesses-left").textContent = "Guesses Left: " + guessesLeft;

           
            document.getElementById("letters-guessed").innerHTML = resetLettersGuessed;

            // NEW WORD
            currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
            console.log(currentWord)
            

            progressWord = [];
            for (i = 0; i < currentWord.length; i++) {
                progressWord.push("__");
            }
            document.getElementById("word-guess").innerHTML = progressWord.join(" ");

            
            wins++;
            document.getElementById("wins").innerHTML = "Wins: " + wins;
            
        }
    }

