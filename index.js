var randomno1 = Math.floor(Math.random() * 6) + 1;

var randomdiceimg = "images/dice" + randomno1 +".png";

var img1 = document.querySelectorAll("img")[0];                // document.querySelectorAll("img")[0].setAttribute("src","images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png");

img1.setAttribute("src" , randomdiceimg);




var randomno2 = Math.floor(Math.random()*6) + 1;

var randdimg ="images/dice" + randomno2 + ".png";

var img2 = document.querySelectorAll("img")[1];                 // document.querySelectorAll("img")[1].setAttribute("src","images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png");

img2.setAttribute("src", randdimg);


if(randomno1>randomno2){
    document.querySelector("h1").innerHTML="Player 1 wins"
}
else if(randomno2>randomno1){
    document.querySelector("h1").innerHTML="Player 2 wins"
}
else{
    document.querySelector("h1").innerHTML="Draw"
}