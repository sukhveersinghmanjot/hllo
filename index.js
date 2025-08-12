
    var dic = Math.floor( Math.random()*6  )+1;
 var noofdice= "dice"+dic+".png.png";
var noofimages="image/"+noofdice;
  
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",noofimages);

var random= Math.floor(Math.random () *6 ) +1;
var source = "image/dice" + random + ".png.png" ;
 document.querySelectorAll("img")[1].setAttribute("src" , source)


if(dic> random ){

document.querySelector("h1").innerHTML=" player 1  wins!";

}
else if(random> dic){
    document.querySelector("h1").innerHTML="player 2  wins!";
}
else{
     document.querySelector("h1").innerHTML="draw!";
}