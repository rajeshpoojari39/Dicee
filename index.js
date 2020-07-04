 
 var randomNumber1 = Math.floor( (Math.random() * 6) + 1) ;
 var diceImage1 = "images/dice" + randomNumber1 + ".png";
 
 document.getElementsByTagName("img")[0].setAttribute("src", diceImage1);



 var randomNumber2 = Math.floor( (Math.random() * 6) + 1) ;
 var diceImage2 = "images/dice" + randomNumber2 + ".png";

 document.getElementsByTagName("img")[1].setAttribute("src", diceImage2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins"
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins"
}
else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw !"
}



// function start(){
//     dice1Random();
//     dice2Random();
//     win();
// }

// function dice1Random(){
//     if (randomNumber1 === 1){
//         document.getElementsByTagName("img")[0].setAttribute("src", "images/dice1.png");
//     }
//     else if(randomNumber1 === 2){
//         document.getElementsByTagName("img")[0].setAttribute("src", "images/dice2.png");
//     }
//     else if(randomNumber1 === 3){
//         document.getElementsByTagName("img")[0].setAttribute("src", "images/dice3.png");
//     }
//     else if(randomNumber1 === 4){
//         document.getElementsByTagName("img")[0].setAttribute("src", "images/dice4.png");
//     }
//     else if(randomNumber1 === 5){
//         document.getElementsByTagName("img")[0].setAttribute("src", "images/dice5.png");
//     }
//     else if(randomNumber1 === 6){
//         document.getElementsByTagName("img")[0].setAttribute("src", "images/dice6.png");
//     }
// }

// function dice2Random(){
//     if (randomNumber2 === 1){
//         document.getElementsByTagName("img")[1].setAttribute("src", "images/dice1.png");
//     }
//     else if(randomNumber2 === 2){
//         document.getElementsByTagName("img")[1].setAttribute("src", "images/dice2.png");
//     }
//     else if(randomNumber2 === 3){
//         document.getElementsByTagName("img")[1].setAttribute("src", "images/dice3.png");
//     }
//     else if(randomNumber2 === 4){
//         document.getElementsByTagName("img")[1].setAttribute("src", "images/dice4.png");
//     }
//     else if(randomNumber2 === 5){
//         document.getElementsByTagName("img")[1].setAttribute("src", "images/dice5.png");
//     }
//     else if(randomNumber2 === 6){
//         document.getElementsByTagName("img")[1].setAttribute("src", "images/dice6.png");
//     }
// }

// function win(){
//     if (randomNumber1 > randomNumber2){
//         document.querySelector("h1").innerHTML = "Player 1 Wins"
//     }
//     else if(randomNumber2 > randomNumber1){
//         document.querySelector("h1").innerHTML = "Player 2 Wins"
//     }
//     else if(randomNumber1 === randomNumber2){
//         document.querySelector("h1").innerHTML = "Draw"
//     }
// }


// window.onload = start ;