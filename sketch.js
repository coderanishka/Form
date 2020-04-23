var canvas;
var database;
var form;
var input,input2,input3;
var radio;
var userCount;

function setup(){
 createCanvas(900,800);
 database = firebase.database();
 ref = database.ref('users');

 
 input = createInput();
 input.position(130,170);
 //input.size(500,50);
 
 
 input2 = createInput();
 input2.position(130,210);
 //input2.size(500,50);

 input3 = createInput();
 input3.position(130,250);
// input3.size(500,50);

 radio = createRadio();
 radio.position(80,420)
 radio.size(1000);
 radio.option('Basket Ball  ');
 radio.option('FootBall  ');
 radio.option('Badminton  ');
 radio.option('Swimming  ');
 radio.option('Tennis');
// textAlign(CENTER);
 
 radio2 = createRadio();
 radio2.position(80,520);
 radio2.option('Within School Premises  ');
 radio2.option('Sports Complex (Outside School)')

 radio3 = createRadio();
 radio3.position(80,620);
 radio3.option('Yes  ');
 radio3.option('No  ')
 radio3.option('Not Sure Yet ');

 submitButton = createButton('Submit');
 submitButton.size(80,40);
 submitButton.position(700,700)
 submitButton.mousePressed(submitForm);
}

function draw(){
  background(0,200,200);
  stroke(0);
  fill(0)
  textSize(80);
  text("School Sports",200,100);
 
  textSize(20);
  text("Name:",30,180)
  text("Class:",30,220);
  text("E-Mail:",30,260);
  text("1.Which Sport would you like to Participate In?",30,390)
  text("2.Where do you think the sports should take place?",30,490)
  text("3.Are you gonna participate in this year's Sports Day?",30,590)
  

  strokeWeight(5)
  noFill();
  line(0,125,1600,125);
  line(0,300,1600,300);
}

function submitForm(){
  data = {
    name : input.value(),
    class: input2.value(),
    email: input3.value()
  }
  console.log(data);
    ref.push(data);
 
}

