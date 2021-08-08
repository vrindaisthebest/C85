canvas = document.getElementById('myCanvas');
ctx = canvas.getContext ("2d");
rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;

function add(){
    background_imagetag = new Image();
    background_imagetag.onload = uploadbackground;
    background_imagetag.src = background_image;

    rover_imagetag = new Image();
    rover_imagetag.onload = uploadrover;
    rover_imagetag.src = rover_image;

}

function uploadbackground() {
    ctx.drawImage(background_imagetag, 0 , 0 , canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imagetag, rover_x , rover_y , rover_width, rover_height);
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '38') {
        up();
    }
    if (keypressed == '40') {
        down();
    }
    if (keypressed == '37') {
        left();
    }
    if (keypressed == '39') {
        right();
    }
}

function up()
{
    if (rover_y >= 0)
    {
        rover_y = rover_y - 10;
        console.log ("When up arrow is pressed, x = " + rover_x + "| y = " + rover_y);

        uploadbackground();
        uploadrover();


    }
}

function down()
{
    if (rover_y <= 500)
    {
        rover_y = rover_y + 10;
        console.log ("When up arrow is pressed, x = " + rover_x + "| y = " + rover_y);

        uploadbackground();
        uploadrover();


    }
}


function left()
{
    if (rover_x >= 0)
    {
        rover_x = rover_x - 10;
        console.log ("When up arrow is pressed, x = " + rover_x + "| y = " + rover_y);

        uploadbackground();
        uploadrover();


    }
}


function right()
{
    if (rover_x <= 700)
    {
        rover_x = rover_x + 10;
        console.log ("When up arrow is pressed, x = " + rover_x + "| y = " + rover_y);

        uploadbackground();
        uploadrover();


    }
}

nasa_mars_images_array = ["image_1.jpg","image_2.jpg","image_3.jpg","image_4.jpg"];

random_number = Math.floor (Math.random() * 4);
console.log ( random_number );
background_image = nasa_mars_images_array[random_number];
console.log("background_image = " + background_image);
rover_image = "rover.png";
