/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = null;
let phrase = null;

//Create game when start buttons is clicked

document.getElementById('btn__reset').addEventListener('click', () => {

      if ($("#overlay").attr('class') === 'lose' || 'win') {            
        
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
            $("#overlay").attr('class', 'start');
            
          }
          game = new Game();
          phrase = new Phrase();
          game.startGame();
        
    });


$(".key").on('click', function (letter) {
    game.handleInteraction(letter.target);
});





