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
    createCharacter(200,100);

}
function draw()
{
    background(30,400,150);
    stroke(0);
    fill(0);

    // call createoutlining function
    createoutlinging(15);

    // exit text 
    textSize(20);
    text("Exit", width-50, height-50)

   //createCharacter(200,100);
   drawcharacter();
   charactermovement();
   exiting();
   movingsecondshape();
   movingfirstshape();
   drawfirstbadguy();
   drawsecondbadguy();
    
    //random speed 
    ShapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    ShapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    //random speed
    CircleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);
    CircleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1); 
   
    // create the shape based on the mouse clicks
    fill(100,200,345);
    circle(mouseShapeX, mouseShapeY, 30);

}
function drawsecondbadguy()
{
      // possible bad number two
      fill(100,230,200);
      //shape
      circle(CircleX,CircleY, 35);
}
function drawfirstbadguy()
{
    // possible bad guy
    fill(150,130,250);
    //shape
    circle(shapeX, shapeY, 25); 
}
function movingfirstshape()
{
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
}
function movingsecondshape()
{
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
}
function exiting()
{
     //checking to see if the character has left the building
    if(characterX > width && characterY > height-50)
    {
        fill(250,100,400);
        stroke(15);
        textSize(30);
        text("Hooray You Made It!!", width/2-50, height/2-50);  
    }
}

function charactermovement()
{
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
}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
     //character  
     //circle(characterX,characterY,30);
}
function drawcharacter()
{
    fill(150,0,150);
    circle(characterX,characterY,30);
}
  

function createoutlinging(thickness)
{
     // top border
     rect(0,0,width,thickness);
     // left border
     rect(0,0,thickness,height);
     // bottom border
     rect(0,height-thickness,width, thickness);
     //right upper border
     rect(width-thickness,0,thickness,height-50);
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