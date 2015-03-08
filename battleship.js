/**
 * Created by Michael on 2/22/2015.
 */

/*
 DECLARE three variables to hold the location of each cell
 of the ship. Call them location1, location2 and
 location3.
 */

var location1 = Math.floor(Math.random()*5);
console.log(location1);
//var location1 = 3;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;  // User's guess for a location
var hits = 0;   // Number of hits.  Set to zero at beginning of game
var guesses = 0; // Accumulate number of guesses by user
var isSunk = false; // Initially false; True if all locations are hit (hits = 3)

while (!isSunk){
    guess = prompt("Ready, aim, fire! (enter a number 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else{
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!");
            hits = hits + 1;

            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        }else{
            alert("MISS");
        }
    }
}
var stats = "You took " + guesses + " guesses to sink the battleship, " +
    "which means your shooting accuracy was " + (3/guesses);
alert(stats);


