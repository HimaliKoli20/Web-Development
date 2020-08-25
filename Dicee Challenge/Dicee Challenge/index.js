
var randomNumber1 = Math.floor((Math.random()*6)+1);
var firstImage = document.getElementsByClassName("img1")[0];

switch(randomNumber1){
    case 1:
        firstImage.setAttribute("src","images/dice1.png");
        break;
    case 2:
        firstImage.setAttribute("src","images/dice2.png");
        break;
    case 3:
        firstImage.setAttribute("src","images/dice3.png");
        break;
    case 4:
        firstImage.setAttribute("src","images/dice4.png");
        break;
    case 5:
        firstImage.setAttribute("src","images/dice5.png");
        break;
    case 6:
        firstImage.setAttribute("src","images/dice6.png");
        break;
}

var randomNumber2 = Math.floor((Math.random()*6)+1);
var secondImage = document.getElementsByClassName("img2")[0];

switch(randomNumber2){
    case 1:
        secondImage.setAttribute("src","images/dice1.png");
        break;
    case 2:
        secondImage.setAttribute("src","images/dice2.png");
        break;
    case 3:
        secondImage.setAttribute("src","images/dice3.png");
        break;
    case 4:
        secondImage.setAttribute("src","images/dice4.png");
        break;
    case 5:
        secondImage.setAttribute("src","images/dice5.png");
        break;
    case 6:
        secondImage.setAttribute("src","images/dice6.png");
        break;
}
var whoWonIt = document.getElementById("winning_player");
if(randomNumber1>randomNumber2)
{
    whoWonIt.innerHTML="Player 1 Wins!";
}
else if(randomNumber1<randomNumber2)
{
    whoWonIt.innerHTML="Player 2 Wins!";
}
else
{
    whoWonIt.innerHTML="Draw!";
}