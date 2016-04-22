/*=============================================
-----------------------------------
Copyright (c) 2016 Lachlan Burndred
-----------------------------------
@file: assets.js
@date: 21/04/2016
@author: Lachlan Burndred
@brief: Main assets for the website.
===============================================*/
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var FPS = 60;

var Update = function()
{
    
} // Main Update Function

var Time = {
    deltaTime: 0,
    lastUpdate: 0,
    now: 0,
    GetDeltaTime: function()
    {
        this.now = Date.now();
        this.deltaTime = (this.now - this.lastUpdate) / 1000;
        this.lastUpdate = Date.now();
    }
} // Time Controller

setInterval(function ()
{
    Update();
    Time.GetDeltaTime();
}, 1000 / FPS); // Runs Update 60TPS