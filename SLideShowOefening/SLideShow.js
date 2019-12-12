window.onload = init; //LET OP GEEN "()" haken gebruiken bij onload event!!!

var btn,imgHolder;

function init()
{
    btn = document.getElementById('hideBtn');
    imgHolder = document.getElementById('plaatje');
    btn.addEventListener("click", doeIets);
}
function doeIets()
{
    fade(imgHolder,1000);
}

function fade(el, duration)
{
    var s = el.style;
    var step = 25/(duration || 300);
    var curOpa = 0;
    //console.log("wat is step: " + step);
    s.opacity = s.opacity || 1;
    
    function fadeOut() 
    {
        console.log("START");
        if(s.opacity <= 0)
        {
            fadeIn();   
        }
        else
        {
            s.opacity -= step;
            setTimeout(fadeOut, 25);
        }
    }
    function fadeIn() 
    {
        if(s.opacity >= 1)
        {
            console.log("STOP!");
        }
        else
        {
            curOpa += step;
            s.opacity = curOpa;
            console.log ("alle vars: " + s.opacity,step,curOpa);
            setTimeout(fadeIn, 25);
        }
    }
    fadeOut();
} 

//(function fade() { (s.opacity -= step) < 0 ? s.display = "none" : setTimeout(fade, 25); })();