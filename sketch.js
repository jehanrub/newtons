
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
  createCanvas(800, 800);


  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  Roof = new Ground(400, 100, 400, 20)
  Bob1 = new Bob(300, 400, 15)
  Bob2 = new Bob(340, 400, 15)
  Bob3 = new Bob(380, 400, 15)
  Bob4 = new Bob(420, 400, 15)
  Bob5 = new Bob(460, 400, 15)
  Bob6 = new Bob(500, 400, 15)
  Rope1 = new Rope(Bob1.body, Roof.body, -100, 9)
  Rope2 = new Rope(Bob2.body, Roof.body, -60, 9)
  Rope3 = new Rope(Bob3.body, Roof.body, -20, 9)
  Rope4 = new Rope(Bob4.body, Roof.body, 20, 9)
  Rope5 = new Rope(Bob5.body, Roof.body, 60, 9)
  Rope6 = new Rope(Bob6.body, Roof.body, 100, 9)


  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Roof.display()
  Bob1.display()
  Bob2.display()
  Bob3.display()
  Bob4.display()
  Bob5.display()
  Bob6.display()
  Rope1.display()
  Rope2.display()
  Rope3.display()
  Rope4.display()
  Rope5.display()
  Rope6.display()



  text(mouseX + ',' + mouseY, 50, 50)
  drawSprites();

}
function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.applyForce(Bob1.body, Bob1.body.positon, { x: -40, y: 40 })
  }
}


