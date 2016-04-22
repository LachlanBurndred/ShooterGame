/*=============================================
-----------------------------------
Copyright (c) 2016 Lachlan Burndred
-----------------------------------
@file: objects.js
@date: 21/04/2016
@author: Lachlan Burndred
@brief: Main object controller for the website.
===============================================*/

function GameObject()
{
    var gameObject = {
        radius: 32,
        color: "blue",
        position: Vector2(),
        
    }

    return gameObject;
}

function Player()
{
    var player = {
        radius: 32,
        color: "green",
        position: Vector2()
    }

    return player;
}