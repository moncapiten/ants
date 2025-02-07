
let ant;

let dotRadius = 15;


let debugMode = true;
let senseDebug = false;
let kind = "food";


function setup() {
  ant = new Ant(500, 500, 0, 0.0000001);
  frameRate(24);
  
  pixelDensity(1);
  createCanvas(1900, 1050);
  background(0);
  
  
  
  
  
}


function draw() {
  
//  background(0);
  ant.update();
  ant.dis();

}
