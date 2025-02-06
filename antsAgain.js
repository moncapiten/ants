
let ant;

let dotRadius = 25;


function setup() {
  ant = new Ant(500, 500, 0, 0.000001);
  frameRate(12);
  
  pixelDensity(1);
  createCanvas(1900, 1050);
  background(0);
  
  
  
  
  
}


function draw() {
  
  //background(0);
  ant.update();
  ant.dis();

}
