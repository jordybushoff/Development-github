var canvas = document.querySelector('#myCanvas');
var context = canvas.getContext('2d');

var xPos = 0;
var yPos = 0;

context.rect(xPos, yPos, 50, 50);
context.stroke();


function Verander(){
  var canvas  = document.getElementById("myCanvas");
  var context = canvas.getContext('2d');
    
  canvas.with = window.innerWidth;
  canvas.height = window.innerHeight;
    
    
    var img = new Image();
    img.src = 'Ball.png';
    img.onload = function (e)
    {
    context.drawImage(img, 10, 50);
    }
}


