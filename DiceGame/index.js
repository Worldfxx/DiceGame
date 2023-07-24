var randomVar = Math.floor((Math.random() * 6) + 1); 
var randomDice = "./images/dice" + randomVar + ".png";

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomDice);

var randomVar2 = Math.floor((Math.random() * 6) + 1); 
var randomDice2 = "images/dice" + randomVar2 + ".png";


var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomDice2);


if (randomVar > randomVar2){
    document.querySelector("h1").innerHTML="Player 1 Won";
}

else if (randomVar < randomVar2){
    document.querySelector("h1").innerHTML="Player 2 Won";
}

else {
    document.querySelector("h1").innerHTML="Draw!";
}
