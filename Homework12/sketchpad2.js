//x and y are my character
var characterX = 150;
var characterY = 150;
//which keys do what
var w = 87;
var s = 83;
var a = 65;
var d = 68;

//x and y for a random shape
var shapeX = 15;
var shapeY = 25;
var ShapeXSpeed;
var ShapeYSpeed;
//x and y for second random shape
var CircleX = 20;
var CircleY = 30;
var CircleXSpeed;
var CircleYSpeed;

//when the mouse is clicked a shape appears
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(800,600);
    //a random speed to start
    ShapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    ShapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    CircleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);
    CircleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1); 

}
function draw()
{
    background(30,400,150);
    stroke(0);
    fill(0);
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0,height-10,width, 10);
    //right upper border
    rect(width-10,0,10,height-50);

    // exit text 
    textSize(20);
    text("Exit", width-50, height-50)

    //character
    fill(150,0,150);
    circle(characterX,characterY,30);

    //Keys
    if(keyIsDown(w))
    {
        characterY -= 15;
    }
    if(keyIsDown(s))
    {
        characterY += 15;
    }
    if(keyIsDown(a))
    {
        characterX -= 15;
    }
    if(keyIsDown(d))
    {
        characterX += 15;
    }    
    // possible bad guy
    fill(150,130,250);
    //shape
    circle(shapeX, shapeY, 25);
    // possible bad number two
    fill(100,230,200);
    //shape
    circle(CircleX,CircleY, 35);
    

    //random speed 
    ShapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    ShapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    //random speed
    CircleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);
    CircleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1); 


    //move the shape
    shapeX += ShapeXSpeed;
    shapeY += ShapeYSpeed;
    // checking to see if the shape has gone out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }
    //move the second shape
    CircleX += CircleXSpeed;
    CircleY += CircleYSpeed;
    // checking to see if the shape has gone out of bounds
    if (CircleX > width)
    {
        CircleX =0;
    }
    if(CircleX < 0)
    {
        CircleX = width;
    }
    if(CircleY > height)
    {
        CircleY = 0;
    }
    if(CircleY < 0)
    {
        CircleY = height;
    }

    //checking to see if the character has left the building
    if(characterX > width && characterY > height-50)
    {
        fill(250,100,400);
        stroke(15);
        textSize(30);
        text("Hooray You Made It!!", width/2-50, height/2-50);
    }

    // create the shape based on the mouse clicks
    fill(100,200,345);
    circle(mouseShapeX, mouseShapeY, 30);

}
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
function keyIsDown()
{
    console.log(key, ' ', keyCode);
    return false; // prevent default
}