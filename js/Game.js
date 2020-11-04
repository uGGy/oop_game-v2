/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null; 
    }

 //Create Phrase


    createPhrases(){
        const phrases = [new Phrase("This is bowling"),
                        new Phrase ("A picnic short of a sandwich"),
                        new Phrase ("It is a soup metaphor"),
                        new Phrase ("I am chuffed to bits"),
                        new Phrase ("Heroes comes and go but legends are forever") ];

        return phrases; 


    };

    
    //Selects random phrase from phrases property
    
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    };

    
    // Begins game by selecting a random phrase and displaying it to user


    startGame() {
        
        document.getElementById('overlay').style.display = 'none';
        const randomPhrase = this.getRandomPhrase();
        this.activePhrase = new Phrase (randomPhrase.phrase.toLowerCase());
        this.activePhrase.addPhraseToDisplay();  
        console.log(this.activePhrase);
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */  
   checkForWin() {
       
    const arrayHideLetter = document.getElementsByClassName("hide letter");

    for(let i = -1 ; i < arrayHideLetter.length; i++){
        let htmlcollection = arrayHideLetter.length;
        console.log(htmlcollection);
            if (htmlcollection <= 0) {
                this.gameOver(true) ;
            } else {
                return false; 
            }  
    };
   }

   //Display win or lose message depending of  final game result
    
    gameOver(gameWon) {
        $("#overlay").fadeIn(2000);

        if (gameWon == false) {

            $("#overlay").attr('class', 'lose');    
            $("#overlay").css("backgroundColor", "red");
            $("#game-over-message").text("You lost! Try again ;) ");

        } else {

            $("#overlay").attr('class', 'win');    
            $("#overlay").css("backgroundColor", "green");
            $("#game-over-message").text("Congratulations, you won!  =D");
        }
    };

    //Increase the value of  missed property and remove life for each +1
    //If 5, gameOver is called


    removeLife() {
       this.missed+=1;
       const liTries = document.getElementsByClassName("tries");
       
       
       for (let i = 0; i < this.missed; i ++) {
        liTries[i].firstElementChild.src = "images/lostHeart.png";
       }
       
        if (this.missed === 5) {
           game.gameOver(false);
        }
        
    };


    //Handle all the interactions and logic in the game

    handleInteraction(letter) {
      if ($(letter).data('clicked', true)) {
          $(letter).prop('disabled', true);

            if (this.activePhrase.checkLetter($(letter).text()) === true) {
                game.activePhrase.showMatchedLetter($(letter).text());
                $(letter).attr('class','chosen');
                game.checkForWin();
                if (game.checkForWin() === true) {
                    game.gameOver(true);
                }
                
            } else if (this.activePhrase.checkLetter($(letter).text()) === false) {
                $(letter).attr('class','wrong');
                game.removeLife();
        }
    }
}
}

