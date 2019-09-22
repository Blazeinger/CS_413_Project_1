var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(900, 400, {backgroundColor: 0x000000});

gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var ghost_car = new PIXI.Sprite(PIXI.Texture.fromImage("Ghost_Car.png")); // creates the main character which is a ghost_car.
var spirit_1 = new PIXI.Sprite(PIXI.Texture.fromImage("Spirit_1.png"));  // creates enemy number 1
var spirit_2 = new PIXI.Sprite(PIXI.Texture.fromImage("Spirit_1.png"));	// creates enemy number 2
var spirit_3 = new PIXI.Sprite(PIXI.Texture.fromImage("Spirit_2.png"));	// creates enemy number 3
var spirit_4 = new PIXI.Sprite(PIXI.Texture.fromImage("Spirit_2.png"));	// creates enemy number 4

// The following section of code is used to make the default position for each sprite
ghost_car.position.x = 20;
ghost_car.position.y = 200;
stage.addChild(ghost_car);

spirit_1.position.x = 40;
spirit_1.position.y = 100;
stage.addChild(spirit_1);

spirit_2.position.x = 200;
spirit_2.position.y = 100;
stage.addChild(spirit_2);

spirit_3.position.x = 600;
spirit_3.position.y = 300;
stage.addChild(spirit_3);

spirit_4.position.x = 500;
spirit_4.position.y = 100;
stage.addChild(spirit_4);

/*
This function is used to create a random movement generator for each enemy sprite.
*/
function mouseHandler(move)
{
	spirit_1.position.x = Math.floor(Math.random() * 800) + 50;
	spirit_1.position.y = Math.floor(Math.random() * 300) + 50;
	spirit_2.position.x = Math.floor(Math.random() * 800) + 50;
	spirit_2.position.y = Math.floor(Math.random() * 300) + 50;
	spirit_3.position.x = Math.floor(Math.random() * 800) + 50;
	spirit_3.position.y = Math.floor(Math.random() * 300) + 50;
	spirit_4.position.x = Math.floor(Math.random() * 800) + 50;
	spirit_4.position.y = Math.floor(Math.random() * 300) + 50;
}

/*
This function is used to make it so that the user sprite moves with ASWD keys.
*/
function keyHandler(key_in)
{
	if(key_in.keyCode == 87) // keyCode 87 == W.
	{
		ghost_car.position.x -=5;
	}
	
	if(key_in.keyCode == 83) // keyCode 83 == D.
	{
		ghost_car.position.y +=5;
	}
	
	if(key_in.keyCode == 65) // keyCode 65 == A.
	{
		ghost_car.position.x +=5;
	}
	
	if(key_in.keyCode == 68) // keyCode 68 == S.
	{
		ghost_car.position.y -=5;
	}
}

document.addEventListener('keydown', keyHandler); // Enables the movement of sprites that require a key to be pressed.

/*
This section makes it so all sprites that require the mouse buttons to be interacted with.
*/
spirit_1.interactive = true;
spirit_1.on('mousedown', mouseHandler);

spirit_2.interactive = true;
spirit_2.on('mousedown', mouseHandler);

spirit_3.interactive = true;
spirit_3.on('mousedown', mouseHandler);

spirit_4.interactive = true;
spirit_4.on('mousedown', mouseHandler);

/*
Allows the stage and all sprites to be displayed on the webpage.
spirit_3 rotates counter clockwise.
spirit_1 rotates clockwise.
*/
function animate() {
  requestAnimationFrame(animate);
  spirit_3.rotation -= 20;
  spirit_1.rotation += 100;
  renderer.render(stage);
}
animate();


