var i = 0;
var title = 'BABIRESKI·PROJECTS'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typewriter()
{
    if (i < title.length)
    {
        document.getElementById("typing").innerHTML += title.charAt(i);
        i++;
        setTimeout(typewriter, speed);
    }
}