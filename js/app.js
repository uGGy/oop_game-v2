/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = new Game();
let phrase = new Phrase()

//Create game when start buttons is clicked

document.getElementById('btn__reset').addEventListener('click', () => {
        game.startGame();

        if ($("#overlay").attr('class') !== 'start') {            
        
            var emptyList =  ()  => {
                const ul = document.querySelector('#phrase ul');
                var listLength = ul.children.length;
        
                for (i = 0; i < listLength; i++) {
                  ul.removeChild(ul.children[0]);
                }
              }
    
            $(".show").attr("class", "hide letter");
            $(".chosen").attr("class", "key");
            $(".wrong").attr("class", "key");
            $(".key").prop('disabled', false);
           
            function resetHeart ()  {
                const li =  document.getElementsByClassName("tries");
                for (i =0 ; i < 5; i++) {
                 li[i].firstElementChild.src = "images/liveHeart.png";
             };
             };  

            resetHeart();
            emptyList();
            $("#overlay").attr('class', 'start')
            game.missed = 0; 
            game.startGame();
            
            
             }
        
    });


$(".key").on('click', function (letter) {
    game.handleInteraction(letter.target);
    console.log(letter.target);
});





