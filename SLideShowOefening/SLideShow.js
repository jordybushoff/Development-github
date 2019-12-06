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
    //fadeOut(imgHolder);
}

//Variable toevoegen om het + en - uit elkaar te halen voor de display van de knop.

function fade(el, duration)
{
    var s = el.style;
    var step = 25/(duration || 300);
    //console.log("wat is step: " + step);
    s.opacity = s.opacity || 1;
    
    function fadeUit() 
    {
        //console.log("opacity: " + s.opacity)
        if(s.opacity < 0)
        {
             fadeIn();
        }
        else
        {
            s.opacity -= step;
            setTimeout(fadeUit, 25);
        }
    }
    fadeUit();
    
     function fadeIn() 
    {
        //console.log("opacity: " + s.opacity)
        if(s.opacity > 1)
        {
            
        }
        else
        {
            s.opacity += step;
            setTimeout(fadeIn, 25);
        }
    }
    
}



//(function fade() { (s.opacity -= step) < 0 ? s.display = "none" : setTimeout(fade, 25); })();