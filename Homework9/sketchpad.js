var headX = 200;
var headY = 90;
var headDirection = 1;

var bodyX = 150;
var bodyY = 300;
var bodyDirection = 4;

var hairX = 100;
var hairY = 50;
var hairDirection = 3;

var LimegreenX = 10;
var LimegreenY = 500;
var LimegreenDirection = 2;


var size = 22;
var count = 0;
var sizeDirection = 2;
function setup()
{
    createCanvas(600, 800);
}

function draw()
{
   background(0,200,490);
   // head 
   fill(500,200,0);
   circle(headX,headY,185);
   headX+=headDirection;
   if(headX >= 410 || headX <= 80)
   {
       headDirection *= -1;
   }
   
   fill(0,0,0);
   circle(300,hairY,90);
   hairY+=hairDirection;
   if(hairY <= 0 || hairY >= 450 )
   {
       hairDirection *= -1;
   }
   // mouth
   fill(550,0,60);
   ellipse(300,200,50,60);
   // body
   fill(100,35,90);
   square(bodyX,bodyY,140);
   bodyX+=bodyDirection;
   if(bodyX >= 300 || bodyX <= 90)
   {
       bodyDirection *= -1;
   }
   fill(0,90,130);
   square(220,390,70);
   fill(0,95,135);
   square(320,390,70);
   //eye
   fill(25,100,400);
   circle(265,130,30);
   fill(25,100,400);
   circle(340,130,30);
   line(300,20,205,55);
   line(400,35,305,60);
   fill(150,30,100);
   square(380,270,40);
   fill(150,30,100);
   square(190,270,40);
   fill(190,50,290);
   ellipse(90,600,100);
   // Limegreen
   fill(0,500,150);
   rect(90,LimegreenY,50,90);
   LimegreenY+=LimegreenDirection;
   if(LimegreenY <= 15 || LimegreenY >= 600 )
   {
       LimegreenDirection *= -1;
   }
   fill(70,90,180);
   circle(590,790,110);
   fill(800,15,90);
   circle(100,490,80);
   fill(728,809,50);
   ellipse(299,680,200);
   fill(380,166,70);
   rect(470,150,90,155);
   fill(189,616,07);
   triangle(30,75,58,20,86,75);
   textSize(35);
   text('Caitlyn A', 400, 520);
   
   fill(0,0,0);
   textSize(size);
   size+= sizeDirection;
   count++;
   if(count > 5)
   {
       sizeDirection *=-1;
       count = 0;
   }
   text('How I see myself',80,690);


}