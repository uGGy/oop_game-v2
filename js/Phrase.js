/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    //Display phrase in placeholders on the gameboard

    addPhraseToDisplay() {

    for(let i = 0; i < this.phrase.length; i++){
    let li = document.createElement('li');
    li.textContent = this.phrase[i];
    
     if(li.textContent === ' '){
        li.setAttribute('class', 'hide space');
        
    } else {
        li.setAttribute('class', `hide letter ${this.phrase[i]}`);
    }

    document.querySelector("#phrase ul").appendChild(li);
    
    }
    }


      
   // Checks if letter chosen letter is in the phrase
    

    checkLetter(letter) {
        if(this.phrase.includes(letter)) {
            return true
        } else {
            return false;
        }
    }

    //Display letter if it's in the string replacing the className


    showMatchedLetter(letter) {
        const listOfLetters = document.getElementsByClassName(`hide letter ${letter}`);
        this.listOfLettersLenght = listOfLetters.length;
    
        while (listOfLetters.length) {
          listOfLetters[0].className = "show";
        }
      }
    }

 
