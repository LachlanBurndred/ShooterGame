/*=============================================
-----------------------------------
Copyright (c) 2016 Lachlan Burndred
-----------------------------------
@file: main.js
@date: 21/04/2016
@author: Lachlan Burndred
@brief: Main js for the website.
===============================================*/

// Main Update Function
var Update = function ()
{
    for (i = 0; i < gameObjects.length; i++)
    {
        gameObjects[i].update();
    }
}
$("#myCanvas").keydown(function (event)
{
    if (event.which == KeyCode.w)
        up = true;
    console.log("up " + up);

    if (event.which == KeyCode.a)
        left = true;
    console.log("left " + left);

    if (event.which == KeyCode.s)
        down = true;
    console.log("down " + down);

    if (event.which == KeyCode.d)
        right = true;
    console.log("right " + right);
});

$("#myCanvas").keyup(function (event)
{
    if (event.which == KeyCode.w)
    {
        up = false;
        console.log("up " + up);
    }

    if (event.which == KeyCode.a)
    {
        left = false;
        console.log("left " + left);
    }

    if (event.which == KeyCode.s)
    {
        down = false;
        console.log("down " + down)
    }

    if (event.which == KeyCode.d)
    {
        right = false;
        console.log("right " + right);
    }
});

// Runs Update At 60FPS
setInterval(function ()
{
    Update();
    Time.GetDeltaTime();
}, 1000 / FPS);