var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_img_width = 50;
block_img_height = 55;

var player_object= "";
var block_image_object= "";

function player_update() 
{
fabric.Image.fromURL("player.png", function(Img){
player_object = Img;

player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y,
left:player_x
});
canvas.add(player_object);

});

}
function new_image(get_image) 
{
fabric.Image.fromURL(get_image, function(Img){
block_image_object = Img;

block_image_object.scaleToWidth(block_img_width);
block_image_object.scaleToHeight(block_img_height);
block_image_object.set({
top:player_y,
left:player_x
});
canvas.add(block_image_object);

});

}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("p and shift pressed together");
	block_img_width = block_img_width + 10;
	block_img_height = block_img_height + 10;
	document.getElementById("current_width").innerHTML = block_img_width;
	document.getElementById("current_height").innerHTML = block_img_height;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("m and shift pressed together");
	block_img_width = block_img_width - 10;
	block_img_height = block_img_height - 10;
	document.getElementById("current_width").innerHTML = block_img_width;
	document.getElementById("current_height").innerHTML = block_img_height;
}

	if(keyPressed == '38')
	{
		up();
		console.log("up");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("left");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("right");
	}
	if(keyPressed == '70')
	{
		new_image('face.batman.jfif'); 
		console.log("f");
	}
	if(keyPressed == '66')
	{
		new_image('body.jfif'); 
		console.log("b");
	}
	if(keyPressed == '76')
	{
		new_image('batman.legs.png'); 
		console.log("l");
	}
	if(keyPressed == '72')
	{
		new_image('left.png'); 
		console.log("h");
	}
	if(keyPressed == '82')
	{
		new_image('right.png'); 
		console.log("r")
	
}
}
function up()
{
if(player_y >=0)
{
player_y = player_y - block_img_height;
console.log("Block image height = " + block_img_height);
console.log("When up arrow key is pressed, X = " + player_x + ", Y = " + player_y);
canvas.remove(player_object);
player_update();
}
}
function down()
{
if(player_y <=500)
{
player_y = player_y + block_img_height;
console.log("Block image height = " + block_img_height);
console.log("When down arrow key is pressed, X = " + player_x + ", Y = " + player_y);
canvas.remove(player_object);
player_update();
}
}
function left()
{
if(player_x >=0)
{
player_x = player_x - block_img_width;
console.log("Block image width = " + block_img_width);
console.log("When left arrow key is pressed, X = " + player_x + ", Y = " + player_y);
canvas.remove(player_object);
player_update();
}
}
function right()
{
if(player_x <=850)
{
player_x = player_x + block_img_width;
console.log("Block image width = " + block_img_width);
console.log("When right arrow key is pressed, X = " + player_x + ", Y = " + player_y);
canvas.remove(player_object);
player_update();
}
}