
var buttons = document.getElementsByClassName('colourButton');


var heading;
heading = document.getElementById('colourValue');
heading.innerHTML = 'Hello world!';

function setButtonColour(button, red, green, blue) {
    "use strict";
    button.setAttribute('style', 'background-color: rgb(' + red + ',' + green + ',' + blue + ');');
}