var buttons = document.getElementsByClassName('colourButton')[0];


var heading;
heading = document.getElementById('colourValue');
heading.innerHTML = 'Hello world!';

'use strict';
function setButtonColour(button, red, green, blue) {
    button.setAttribute('style',
                        'background-color: rgb(' + red + ',' + green + ',' + blue + ');'
                       );
    
}
setButtonColour(buttons[0], 0, 0, 255);