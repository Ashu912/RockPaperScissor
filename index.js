var ax = document.getElementById("WhoWinsTheGame");
ax.style.display = "none";
var ax1 = document.getElementById("WhoWinsTheGame1");
ax1.style.display = "none";
var ax2 = document.getElementById("YouWinAgainsPC");
ax2.style.display = "none";
var Pcw1 = document.getElementById("PcWinsTheGame");
Pcw1.style.display = "none";
var Pcw2 = document.getElementById("PcWinAgainsYou");
Pcw2.style.display = "none";
var Pcw3 = document.getElementById("YourChoice");
Pcw3.style.display = "none";
var TieContent = document.getElementById("TiePC");
TieContent.style.display = "none";
var TI1 = document.getElementById("Rock_idTie1");
TI1.style.display = "none";
var TI2 = document.getElementById("Rock_idTie2");
TI2.style.display = "none";
var con1 = document.getElementById('dan');
var element = document.getElementsByClassName("border")[0];
element.style.display = "block";



var Play = document.getElementById("PlayAgain");

function PlayAgain() {
  ax.style.display = "none";
  ax1.style.display = "none";
  ax2.style.display = "none";
  Pcw1.style.display = "none";
  Pcw2.style.display = "none";
  Pcw3.style.display = "none";
  TieContent.style.display = "none";
  TI1.style.display = "none";
  TI2.style.display = "none";
  con.style.display = "none";
  con1.style.display = "block";
  var x = document.getElementById("option");
  x.style.display = "block"
}


function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function Rules() {
  var x = document.getElementById("rule");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function Winner() {
  var x = document.getElementById("option");
  ax.style.display = "block";
  ax1.style.display = "block";
  ax2.style.display = "block";
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function YouLost() {
  var x = document.getElementById("option");
  Pcw1.style.display = "block";
  Pcw2.style.display = "block";
  Pcw3.style.display = "block";
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}
function Tie() {
  var x = document.getElementById("option");
  TieContent.style.display = "block";
  TI1.style.display = "block";
  TI2.style.display = "block";
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function WhoWins() {
  var x = document.getElementById("WhoWinsTheGame");
  x.style.display = "none"

}
function PcWins() {
  var x = document.getElementById("PcWinsTheGame");
  x.style.display = "block"
}

var con = document.getElementById('dan1');
con.style.display = "none";
var con1 = document.getElementById('dan');
con1.style.display = "block";
function playdan1() {
  con.style.display = "block";
  con1.style.display = "none";
}


var yourScore = 0;
localStorage.setItem('YourScore', yourScore);
var computerScore = 0;
localStorage.setItem('computerScore', computerScore);


var rockid = document.getElementById('Rock_id');
var paperid = document.getElementById('Paper_id');
var scissorid = document.getElementById('Scissor_id');
var yourScore = Number(document.getElementById('YourScore').innerHTML);
var computerScore = Number(document.getElementById('computerScore').innerHTML);
var YourHand = document.getElementById('UpdateImageForYou');
var ComputerHand = document.getElementById('UpdateImageForPc');
var ComputerHand2 = document.getElementById("UpdateImageForLost");
var YourHand2 = document.getElementById("UpdateImageForYours");
var ComputerTie = document.getElementById("UpdateImageTieForPc");
var YourTie = document.getElementById("UpdateImageTie");

function game() {

  const arr = ['rock', 'paper', 'scissor'];

  const arr2 = Math.floor(Math.random() * 3);
  return arr[arr2]
}

function Rock() {

  let gameres = game()

  if (gameres === 'scissor') {
    ComputerHand.src = `./Assets/${gameres}.png`;
    YourHand.src = `./Assets/Rock.png`;
    console.log("rock win");
    Winner();
    yourScore++;
    localStorage.setItem('YourScore', yourScore);
    document.getElementById('YourScore').innerHTML = localStorage.getItem('YourScore')

  }

  else if (gameres === 'paper') {
    ComputerHand2.src = `./Assets/${gameres}.png`;
    YourHand2.src = `./Assets/Rock.png`;
    console.log("paper win");
    YouLost();
    computerScore++;
    localStorage.setItem('computerScore', computerScore);
    document.getElementById('computerScore').innerHTML = localStorage.getItem('computerScore')
    console.log(gameres + 'paper');

  } else if (gameres === 'rock') {
    ComputerTie.src = `./Assets/${gameres}.png`;
    YourTie.src = `./Assets/Rock.png`
    console.log("game drow");
    Tie();
    console.log(gameres + 'rock');

  }


}
function Paper() {
  let gameres = game()

  if (gameres === 'scissor') {
    ComputerHand2.src = `./Assets/${gameres}.png`;
    YourHand2.src = `./Assets/Paper.png`;
    console.log("scissor win");
    YouLost();
    computerScore = localStorage.getItem('computerScore');
    computerScore++;

    document.getElementById('computerScore').innerHTML = computerScore
  } else if (gameres === 'paper') {
    ComputerTie.src = `./Assets/${gameres}.png`;
    YourTie.src = `./Assets/Paper.png`;
    console.log("gmae drow");
    Tie();
  } else if (gameres === 'rock') {
    ComputerHand.src = `./Assets/${gameres}.png`;
    YourHand.src = `./Assets/Paper.png`;
    console.log("paper win");
    Winner();
    yourScore = localStorage.getItem('YourScore');
    yourScore++;

    document.getElementById('YourScore').innerHTML = yourScore

  }

}
function Scissor() {
  let gameres = game()

  if (gameres === 'scissor') {
    ComputerTie.src = `./Assets/${gameres}.png`;
    YourTie.src = `./Assets/Scissor.png`;
    console.log("game drow");
    Tie();
  } else if (gameres === 'paper') {
    ComputerHand.src = `./Assets/${gameres}.png`;
    YourHand.src = `./Assets/Paper.png`;
    console.log("scissor win");
    Winner();
    yourScore = localStorage.getItem('YourScore');
    yourScore++;

    document.getElementById('YourScore').innerHTML = yourScore
  } else if (gameres === 'rock') {
    ComputerHand2.src = `./Assets/${gameres}.png`;
    YourHand2.src = `./Assets/Scissor.png`;
    console.log("rock win");
    YouLost();
    computerScore = localStorage.getItem('computerScore');
    computerScore++;

    document.getElementById('computerScore').innerHTML = computerScore

  }

}


