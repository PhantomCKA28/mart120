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

var ShapeXs = [];
var ShapeYs = [];
var diameters = [];

var ShapeXSpeed = [];
var ShapeYSpeed = [];

//x and y for second random shape
var CircleX = 20;
var CircleY = 30;

var CircleXs = [];
var CircleYs = [];
var diameters1 = [];

var CircleXSpeed = [];
var CircleYSpeed = [];

//when the mouse is clicked a shape appears
var mouseShapeX;
var mouseShapeY;

var Rectangleobject;
var Rectangleabjecttwo;

function setup()
{
    // create the object
    Rectangleobject = new Rectangle(200,170,10, 50, 50, 150, 75);
    Rectangleabjecttwo = new Rectangle(170,250,100,170,90,75,150);
   
    createCanvas(800,600);
    
    //a random speed to start
    for (var i = 0; i < 50; i++){
    ShapeXSpeed [i] = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    ShapeYSpeed [i] = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    CircleXSpeed [i] = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);
    CircleYSpeed [i] = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1); 
    ShapeXs [i] = Math.floor(Math.random() * (Math.floor(Math.random() * 500)) + 1); 
    ShapeYs [i] = Math.floor(Math.random() * (Math.floor(Math.random() * 440)) + 1); 
    diameters [i] = Math.floor(Math.random() * (Math.floor(Math.random() * 40)) + 1); 
    CircleXs [i] = Math.floor(Math.random() * (Math.floor(Math.random() * 400)) + 1); 
    CircleYs [i] = Math.floor(Math.random() * (Math.floor(Math.random() * 450)) + 1); 
    diameters1 [i] = Math.floor(Math.random() * (Math.floor(Math.random() * 60)) + 1); 
   
   
   
   
    }

    createCharacter(200,100);

}
function draw()
{
    background(30,400,150);
    stroke(0);
    fill(0);

    // create and display object
    Rectangleobject.display();
    Rectangleabjecttwo.display();

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
      for (var i = 0; i < 50; i++)
      {
          console.log (CircleXs[i]);
          circle(CircleXs[i], CircleYs[i], diameters[i]);
          CircleXs[i]=CircleXs[i]+CircleXSpeed[i]
          CircleYs[i]=CircleYs[i]+CircleYSpeed[i]
          if (CircleXs[i]> width)
          {
              CircleXs[i]=0
          }
          if (CircleYs[i]> height)
          {
              CircleYs[i]=0
          }
      }
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
       //random speed
       for (var i = 0; i < ShapeXs.length; i++) 
     ShapeXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
     ShapeYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
     
     //move the shape
     ShapeXs[i] += ShapeXSpeed[i];
     ShapeYs[i] += ShapeYSpeed[i];

     // checking to see if the shape has gone out of bounds
     if(ShapeXs[i] > width)
     {
         ShapeXs[i] = 0;
     }
     if(ShapeXs[i] < 0)
     {
         ShapeXs[i] = width;
     }
     if(ShapeYs[i] > height)
     {
         ShapeYs[i] = 0;
     }
     if(ShapeYs[i] < 0)
     {
         ShapeYs[i] = height;
     }
}
function movingsecondshape()
{
     //random speed
     for (var i = 0; i < CircleXs.length; i++)
    CircleXSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);
    CircleYSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1); 
     
    //move the second shape
     CircleXs[i] += CircleXSpeed[i];
     CircleYs[i] += CircleYSpeed[i];
     // checking to see if the shape has gone out of bounds
     if (CircleXs[i] > width)
     {
         CircleXs[i] =0;
     }
     if(CircleXs[i] < 0)
     {
         CircleXs[i] = width;
     }
     if(CircleYs[i] > height)
     {
         CircleYs[i] = 0;
     }
     if(CircleYs[i] < 0)
     {
         CircleYs[i] = height;
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
    fill(50,20,75)
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