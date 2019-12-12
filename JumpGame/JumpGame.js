function Verander(){
  var canvas  = document.getElementById("myCanvas");
  var context = canvas.getContext('2d');
    
  canvas.with = window.innerWidth;
  canvas.height = window.innerHeight;
    
    
    var img = new Image();
    img.src = 'Ball.png';
    img.onload = function (e)
    {
    context.drawImage(img, 1, 1);
    }
}


