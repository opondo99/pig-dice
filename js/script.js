


var playerOne;var playerTwo;
function player(playerName,turn) {
    this.playerName= playerName;
    this.score = 0;
    this.totalRoll = 0;
    this.turn = turn;

};

player.prototype.roll = function(){
    var rand = Math.floor(Math.random() * 6)+ 1;
    this.score = rand;
};

player.prototype.switch = function(){

    if (this.turn === true){
        this.turn = false;
    } else {
        this.turn = true;
    }
};


player.prototype.reset = function(){
    this.score = 0;
    this.totalRoll = 0;

};


$(document).ready(function() {

    $("#btn3").submit(function(event) {
        event.preventDefault();
        var player1 = $("current-0").val();
        var player2 = $("current-1").val();
        $(this).hide();
        
        playerOne = new player(player1, true);
        playerTwo = new player(player2, false);

        $("#name-0").html(playerOne.playerName);
        $("name-1").html(playerTwo.playerName);


    })
})

function rollDice() {
    if(playerOne.turn === true){

        if(playerOne.totalRoll >= 100){
            alert(playerOne.playerName + " WINS THE GAME!!!");
                playerOne.reset();
        } else {
            playerOne.roll();
            $("#current-0").html(playerOne.score)
        
         if(playerOne.score === 1){

            playerOne.totalRoll = 0;
            $("score-0").html(playerOne.totalRoll);

            playerOne.switch();
            playerTwo.switch();

        } else {
            playerOne.totalRoll += playerOne.score;
            $("score-0").html(playerOne.totalRoll);
        }
        }
    } else if(playerTwo.totalRoll >= 100) {
        alert(playerTwo.playerName +" WINS THE GAME !!!")
        playerTwo.reset();
    } else {
        playerTwo.roll();
        $("current-1").html(playerTwo.score);

        if(playerTwo.score === 1){
            playerTwo.totalRoll = 0;
            $("score-1").html(playerTwo.totalRoll);
            
            playerOne.switch();
            playerTwo.switch();
        } else {
            playerTwo.totalRoll += playerTwo.score;
            $("score-1").html(playerTwo.totalRoll);
        }
        
    }
} 



// function rollDice(this) {
//     var score = document.getElementById("score-");
//     var currentScore = document.grtElementById("current-");
//     var status = document.getElementById("status");

//     var roll1 = math.floor(math.random()* 6) + 1;
//     var roll2 = math.floor(math.random()* 6) + 1;
//     var getTotal = roll1 + roll2;
//     score.innerHTML = getTotal++;
//     currentScore.innerHTML = getTotal;
//     status.innerHTML = "You rolled " + getTotal;
// }

// for (var getTotal = 1; getTotal <= score ; getTotal++ ) {
//     if ()
// }




// $(document).ready(function(){
//     $().(function(event){
//         event.preventDefault()
//         $("div#result").empty();

// function rollDice() {
//     var die1 = document.$("die1");
//     var die2 = document.$("die2");
//     var status = document.$("status");
//     var d1 = math.floor(math.random() * 6) + 1;
//     var d2 = math.floor(math.random() * 6) + 1;
//     var getTotal = d1 + d2;
//     die1.innerHTML = d1;
//     die2.innerHTML = d2;
//     status.innerHTML = "you rolled " +getTotal;
//     if (d1 === d2){
//         status.innerHTML = "You rolled a DOUBLE! You get a free turn!");
//     }
// });

function myFunction() {
    var x = document.getElementById("rules");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}