"use strict";
//Find the 3 card elements
var CARD1 = document.querySelector("#card1");
var CARD2 = document.querySelector("#card2");
var CARD3 = document.querySelector("#card3");
//var loc = window.location.pathname;
//var dir = loc.substring(0, loc.lastIndexOf('/'));
//Compute the paths for the images - convert to lower case to account for possible browser gotchas
var back1 = "cardb1.png";
var back2 = "cardb2.png";
function Flip(e) {
    var card = document.querySelector("#" + e.currentTarget.id);
    var back = e.srcElement.src.substring(e.srcElement.src.lastIndexOf("/") + 1);
    if (card != null && card.classList.contains("flipped") && back == back1) {
        e.srcElement.src = back2;
    }
    else {
        if (card != null && card.classList.contains("flipped") && back == back2)
            e.srcElement.src = back1;
    }
    if (card != null)
        card.classList.toggle("flipped");
}
//Use more modern Eventlistener approach for Events
if (CARD1 != null)
    CARD1.addEventListener("click", Flip);
if (CARD2 != null)
    CARD2.addEventListener("click", Flip);
if (CARD3 != null)
    CARD3.addEventListener("click", Flip);
//End of script
