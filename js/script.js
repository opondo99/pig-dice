function myFunction() {
    var x = document.getElementById("rules");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
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