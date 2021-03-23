var canvas=new fabric.Canvas("mycanvas");
var player_x= 10;
var player_y= 10;
var block_image_width= 30;
var block_image_height= 30;
var player_object="";
var block_image_object="";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top: player_y,
        left: player_x
        });
        canvas.add(player_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
  keypressed= e.keyCode;
  console.log(keypressed);
  if (e.shiftKey==true && keypressed== '80') {
      console.log("shift and p are pressed together");
      block_image_width= block_image_width + 10;
      block_image_height= block_image_height + 10;
    document.getElementById("current_width").innerHTML= block_image_width;
    document.getElementById("current_height").innerHTML= block_image_height;
  }
  if (e.shiftKey== true && keypressed== '77') {
    console.log("shift + m are pressed together");
    block_image_width= block_image_width - 10;
    block_image_height= block_image_height - 10;
    document.getElementById("current_width").innerHTML= block_image_width;
    document.getElementById("current_height").innerHTML= block_image_height;
  }
  if (keypressed== '38') {
    console.log("up is pressed");
    up();
  }
  if (keypressed== '40') {
    console.log("down is pressed");
    down();
  }
  if (keypressed== '37') {
    console.log("left is pressed");
    left();
  }
  if (keypressed== '39') {
    console.log("right is pressed");
    right();
  }
  if (keypressed== '87') {
    console.log("w is pressed");
    new_image('wall.jpg');
  }
  if (keypressed== '71') {
    console.log("g is pressed");
    new_image('ground.png');
  }
  if (keypressed== '76') {
    console.log("l is pressed");
    new_image('light_green.png');
  }
  if (keypressed== '84') {
    console.log("t is pressed");
    new_image('trunk.jpg');
  }
  if (keypressed== '82') {
    console.log("r is pressed");
    new_image('roof.jpg');
  }
  if (keypressed== '89') {
    console.log("y is pressed");
    new_image('yellow_wall.png');
  }
  if (keypressed== '68') {
    console.log("d is pressed");
    new_image('dark_green.png');
  }
  if (keypressed== '85') {
    console.log("u is pressed");
    new_image('unique.png');
  }
  if (keypressed== '67') {
    console.log("c is pressed");
    new_image('cloud.jpg');
  }
  if (keypressed== '08') {
    console.log("backspace is pressed");
    delete_image();
  }
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
      BLOCK_IMAGE_OBJECT= Img;
      BLOCK_IMAGE_OBJECT.scaleToWidth(block_image_width);
      BLOCK_IMAGE_OBJECT.scaleToHeight(block_image_height);
      BLOCK_IMAGE_OBJECT.set({
          top: player_y, left: player_x
      });
      canvas.add(BLOCK_IMAGE_OBJECT);
    }
    );
}
function up() {
  if (player_y >= 0) {
    player_y= player_y - block_image_height;
    console.log("Block image height is " + block_image_height);
    console.log("When up arrow is pressed x is = " + player_x + ", y = " + player_y);
    canvas.remove(player_object);
    player_update();
  }
}
function down() {
  if (player_y <= 500) {
    player_y= player_y + block_image_height;
    console.log("Block image height is " + block_image_height);
    console.log("When up arrow is pressed x is = " + player_x + ", y = " + player_y);
    canvas.remove(player_object);
    player_update();
  }
}
function left() {
  if (player_x >= 0) {
    player_x= player_x - block_image_width;
    console.log("Block image width is " + block_image_width);
    console.log("When up arrow is pressed x is = " + player_x + ", y = " + player_y);
    canvas.remove(player_object);
    player_update();
  }
}
function right() {
  if (player_x <= 700) {
    player_x= player_x + block_image_width;
    console.log("Block image width is " + block_image_width);
    console.log("When up arrow is pressed x is = " + player_x + ", y = " + player_y);
    canvas.remove(player_object);
    player_update();
  }
}
function delete_image() {
  canvas.remove(BLOCK_IMAGE_OBJECT);
}