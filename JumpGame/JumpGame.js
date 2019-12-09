window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("andereball");
    ctx.drawImage(img, 0, 0);
    ctx.width = this.naturalWidth;
    ctx.height = this.naturalHeight;
  
};

function drawImageActualSize() {
  // Use the intrinsic size of image in CSS pixels for the canvas element
  ctx.width = this.naturalWidth;
  ctx.height = this.naturalHeight;

  // Will draw the image as 300x227, ignoring the custom size of 60x45
  // given in the constructor
  ctx.drawImage(this, 0, 0);

  // To use the custom size we'll have to specify the scale parameters 
  // using the element's width and height properties - lets draw one 
  // on top in the corner:
  ctx.drawImage(this, 0, 0, this.width, this.height);
}