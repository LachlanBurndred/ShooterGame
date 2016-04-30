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
        height: 32,
        width: 32,
        color: "purple",
        position: Vector2(0, 0),
        update: function()
        {
            this.Draw();
        },
        Draw: function()
        {
            // Clear the screen.
            context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

            // Save the screen context.
            context.save();

            // Draw the gameObject
            context.beginPath();
            context.fillStyle = this.color;
            context.fill((this.position.x - (this.width / 2)), (this.position.y - (this.height / 2)), this.width, this.height);
            context.closePath();

            // Restore the screen context.
            context.restore();
        }
    }
    return gameObject;
}

var player = new GameObject();

player.width = 64;
player.height = 64;
player.color = "red"
player.speed = 1000.0;
player.position = Vector2((canvas.clientWidth / 2), (canvas.clientHeight / 2));

player.update = function()
{
    if (up)
        player.position.y -= player.speed * Time.deltaTime;

    if (left)
        player.position.x -= player.speed * Time.deltaTime;

    if (down)
        player.position.y += player.speed * Time.deltaTime;

    if (right)
        player.position.x += player.speed * Time.deltaTime;

    this.Draw();
}
player.Draw = function ()
{
    // Clear the screen
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight );
    console.log(player.position.x + ", " + player.position.y);

    // Draw the player
    context.beginPath();
    context.fillStyle = this.color;
    context.fillRect((this.position.x - (this.width / 2)), (this.position.y - (this.height / 2)), this.width, this.height);
}

gameObjects.push(player);